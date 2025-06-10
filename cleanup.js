const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const execSyncOptions = {
  encoding: 'utf8',
  stdio: 'pipe',
};

const colors = {
  reset: '\x1b[0m',
  gray: '\x1b[30m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m',
};

function log(message, color = 'reset') {
  if (color === 'red') {
    console.error(`${colors[color]}${message}${colors.reset}`);
  } else {
    console.log(`${colors[color]}${message}${colors.reset}`);
  }
}

function removeLinterDisableComments() {
  log('\n🧹 Removing linter disable comments...', 'yellow');
  const srcDir = path.join(process.cwd(), 'src/openapi');

  function processFile(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      const originalContent = content;

      // Remove ESLint disable comments and their empty lines
      content = content.replace(/^(\s*)\/\* eslint-disable.*?\*\/(\s*)(\n)?/gm, '');
      content = content.replace(/^(\s*)\/\/ eslint-disable-next-line.*(\n)?/gm, '');
      content = content.replace(/^(\s*)\/\/ eslint-disable.*(\n)?/gm, '');

      // Remove TSLint disable comments and their empty lines
      content = content.replace(/^(\s*)\/\* tslint:disable.*?\*\/(\s*)(\n)?/gm, '');
      content = content.replace(/^(\s*)\/\/ tslint:disable-next-line.*(\n)?/gm, '');
      content = content.replace(/^(\s*)\/\/ tslint:disable.*(\n)?/gm, '');

      if (content !== originalContent) {
        fs.writeFileSync(filePath, content);
      }
    } catch (error) {
      log(`Error processing ${filePath}: ${error.message}`, 'red');
    }
  }

  function walkDir(dir) {
    const files = fs.readdirSync(dir);
    files.forEach((file) => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      if (stat.isDirectory()) {
        walkDir(filePath);
      } else if (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.js') || file.endsWith('.jsx')) {
        processFile(filePath);
      }
    });
  }

  walkDir(srcDir);
}

function runEslint(iteration) {
  try {
    log(`🧹 Running eslint ... #${iteration}`, 'yellow');
    const output = execSync(
      'eslint "src/**/*.ts" "test/**/*.ts" --fix --rule "no-unused-vars: off" --rule "no-duplicate-imports: off" --rule "@typescript-eslint/no-unused-vars: off"',
      execSyncOptions,
    );
    return !!output;
  } catch (error) {
    return true;
  }
}

function runBiome(iteration) {
  try {
    log(`🧹 Running biome ... #${iteration}`, 'yellow');
    const firstOutput = execSync(
      'biome lint --only correctness/noUnusedFunctionParameters src test --fix --unsafe --reporter json',
      execSyncOptions,
    );
    const firstOutputJson = JSON.parse(firstOutput);

    let secondOutputJson;
    try {
      const secondOutput = execSync(
        'biome lint --only correctness/noUnusedVariables src test --reporter json',
        execSyncOptions,
      );
      secondOutputJson = JSON.parse(secondOutput);
    } catch (error) {
      secondOutputJson = { summary: { errors: 1 } };
    }
    execSync(
      'biome lint --only correctness/noUnusedVariables src test --reporter json | remove-unused-vars',
      execSyncOptions,
    );
    return (
      !!firstOutputJson.summary.changed || !!secondOutputJson.summary.errors || !!secondOutputJson.summary.warnings
    );
  } catch (error) {
    return false;
  }
}

function runKnip(iteration) {
  try {
    log(`🧹 Running knip ... #${iteration}`, 'yellow');
    const output = execSync('knip --include classMembers --fix --allow-remove-files', execSyncOptions);
    return !!output && !output.includes('Excellent, Knip found no issues.');
  } catch (error) {
    return true;
  }
}

function runTsr(iteration) {
  try {
    log(`🧹 Running tsr ... #${iteration}`, 'yellow');
    const output = execSync(
      'tsr "src/index.ts" "src/provider/index.ts" "test/.*\\.test\\.ts$" "test/env.ts" -r -w',
      execSyncOptions,
    );
    return !!output && !output.includes('all good!');
  } catch (error) {
    return true;
  }
}

function runCleanup(cleanupIteration) {
  if (cleanupIteration === 1) {
    log('   First iteration may take a while, just wait...', 'magenta');
  }

  let eslintHasChanges = true;
  let eslintIteration = 0;

  while (eslintHasChanges) {
    eslintIteration++;
    eslintHasChanges = runEslint(eslintIteration);
  }

  let biomeHasChanges = true;
  let biomeIteration = 0;

  while (biomeHasChanges) {
    biomeIteration++;
    biomeHasChanges = runBiome(biomeIteration);
  }

  let knipHasChanges = true;
  let knipIteration = 0;

  while (knipHasChanges) {
    knipIteration++;
    knipHasChanges = runKnip(knipIteration);
  }

  let tsrHasChanges = true;
  let tsrIteration = 0;

  while (tsrHasChanges) {
    tsrIteration++;
    tsrHasChanges = runTsr(tsrIteration);
  }

  eslintHasChanges = runEslint(eslintIteration + 1);
  biomeHasChanges = runBiome(biomeIteration + 1);
  knipHasChanges = runKnip(knipIteration + 1);
  tsrHasChanges = runTsr(tsrIteration + 1);

  return eslintHasChanges || biomeHasChanges || knipHasChanges || tsrHasChanges;
}

function cleanup() {
  log('\nRunning cleanup...', 'cyan');
  removeLinterDisableComments();

  let hasChanges = true;
  let iteration = 0;
  while (hasChanges) {
    iteration++;
    log(`\n🧹 Running cleanup iteration #${iteration}`, 'blue');
    hasChanges = runCleanup(iteration);
  }

  log('\n✨ Cleanup completed!\n', 'green');

  log('   Please manully clean left over comments in src/openapi/apis files\n', 'magenta');
}

cleanup();

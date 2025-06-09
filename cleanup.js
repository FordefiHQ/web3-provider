const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const execSyncOptions = {
  encoding: 'utf8',
  stdio: 'pipe',
};

const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
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
  const srcDir = path.join(process.cwd(), 'src');

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
  log('✅ Finished removing linter disable comments\n', 'green');
}

function runKnip(iteration) {
  try {
    log(`🧹 Running knip --fix --allow-remove-files ... #${iteration}`, 'yellow');
    const output = execSync('knip --fix --allow-remove-files', execSyncOptions);
    return !!output && !output.includes('Excellent, Knip found no issues.');
  } catch (error) {
    return true;
  }
}

function runTsr(iteration) {
  try {
    log(`🧹 Running tsr ... #${iteration}`, 'yellow');
    const output = execSync('tsr "src/index.ts" "src/provider/index.ts" "test/.*\\.test\\.ts$" -r -w', execSyncOptions);
    return !!output && !output.includes('all good!');
  } catch (error) {
    return true;
  }
}

function runEslint() {
  try {
    log(`🧹 Running eslint ...`, 'yellow');
    const output = execSync(
      'eslint "src/**/*.ts" "test/**/*.ts" --fix --rule "no-unused-vars: off" --rule "no-duplicate-imports: off" --rule "@typescript-eslint/no-unused-vars: off"',
      execSyncOptions,
    );
    return !!output;
  } catch (error) {
    return true;
  }
}

function runBiome() {
  try {
    log(`🧹 Running remove unused vars with Biome...`, 'yellow');
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
    console.log('%c+++ RoiD', 'background: #ff0000; color: #ffffff', error);
    return false;
  }
}

function runCleanup() {
  const eslintHasChanges = runEslint();
  log('✅ Finished running eslint\n', 'green');

  const biomeHasChanges = runBiome();
  log('✅ Finished running biome\n', 'green');

  let knipHasChanges = true;
  let knipIteration = 0;

  while (knipHasChanges) {
    knipIteration++;
    knipHasChanges = runKnip(knipIteration);
  }
  log('✅ Finished running knip\n', 'green');

  let tsrHasChanges = true;
  let tsrIteration = 0;

  while (tsrHasChanges) {
    tsrIteration++;
    tsrHasChanges = runTsr(tsrIteration);
  }
  log('✅ Finished running tsr\n', 'green');

  return eslintHasChanges || biomeHasChanges || knipIteration > 1 || tsrIteration > 1;
}

function cleanup() {
  log('\nRunning cleanup...', 'blue');
  removeLinterDisableComments();

  let hasChanges = true;
  let iteration = 0;
  while (hasChanges) {
    iteration++;
    log(`🧹 Running cleanup... #${iteration}\n`, 'blue');
    hasChanges = runCleanup();
  }

  log('✨ Cleanup completed!', 'blue');
}

cleanup();

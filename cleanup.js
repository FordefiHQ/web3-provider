const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

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
    const output = execSync('knip --fix --allow-remove-files', { encoding: 'utf8', stdio: 'pipe' });
    return !!output && !output.includes('Excellent, Knip found no issues.');
  } catch (error) {
    return true;
  }
}

function runTsr(iteration) {
  try {
    log(`🧹 Running tsr ... #${iteration}`, 'yellow');
    const output = execSync('tsr "src/index.ts" "src/provider/index.ts" "test/.*\\.test\\.ts$" -r -w', {
      encoding: 'utf8',
      stdio: 'pipe',
    });
    return !!output && !output.includes('all good!');
  } catch (error) {
    return true;
  }
}

function runEslint() {
  try {
    log(`🧹 Running eslint ...`, 'yellow');
    execSync('eslint "src/**/*.ts" "test/**/*.ts" --fix', {
      encoding: 'utf8',
      stdio: 'pipe',
    });
    return false;
  } catch (error) {
    return true;
  }
}

function runBiome() {
  try {
    log(`🧹 Running remove unused vars with Biome...`, 'yellow');
    execSync('biome lint --only correctness/noUnusedFunctionParameters src test --fix --unsafe', {
      encoding: 'utf8',
      stdio: 'pipe',
    });
    execSync('biome lint --only correctness/noUnusedVariables src test --reporter json | remove-unused-vars', {
      encoding: 'utf8',
      stdio: 'pipe',
    });
    return false;
  } catch (error) {
    return true;
  }
}

function runCleanup() {
  const eslintHasChanges = runEslint();
  const eslintHasChangesText = eslintHasChanges ? 'With changes' : 'Without changes';
  log(`✅ Finished running eslint: ${eslintHasChangesText}\n`, 'green');

  const biomeHasChanges = runBiome();
  const biomeHasChangesText = biomeHasChanges ? 'With changes' : 'Without changes';
  log(`✅ Finished running biome: ${biomeHasChangesText}\n`, 'green');

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

  return knipIteration > 1 || tsrIteration > 1;
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
  log(`🧹 Running cleanup... #${iteration + 1}\n`, 'blue');
  runCleanup();

  log('✨ Cleanup completed!', 'blue');
}

cleanup();

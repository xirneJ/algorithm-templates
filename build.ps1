$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $root

$python = 'python'
if (Test-Path (Join-Path $root '.python-packages')) {
  $env:PYTHONPATH = Join-Path $root '.python-packages'
} elseif (Test-Path (Join-Path $root '.venv\Scripts\python.exe')) {
  $python = Join-Path $root '.venv\Scripts\python.exe'
}

& $python -m mkdocs build --strict
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
node tests/site.test.mjs
node tests/taxonomy.test.mjs
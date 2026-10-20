param([int]$Port = 8000)

$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $root

$python = 'python'
if (Test-Path (Join-Path $root '.python-packages')) {
  $env:PYTHONPATH = Join-Path $root '.python-packages'
} elseif (Test-Path (Join-Path $root '.venv\Scripts\python.exe')) {
  $python = Join-Path $root '.venv\Scripts\python.exe'
}

& $python -m mkdocs serve --dev-addr "127.0.0.1:$Port"
$ErrorActionPreference = "Stop"
Set-Location -LiteralPath $PSScriptRoot

$listeners = Get-NetTCPConnection -LocalPort 4000 -State Listen -ErrorAction SilentlyContinue |
  Select-Object -ExpandProperty OwningProcess -Unique

foreach ($processId in $listeners) {
  if ($processId -and $processId -ne $PID) {
    Stop-Process -Id $processId -Force -ErrorAction SilentlyContinue
  }
}

jekyll serve --config "_config.yml,_config_dev.yml" --host 127.0.0.1 --port 4000

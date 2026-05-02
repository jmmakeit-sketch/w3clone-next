$root = "C:\Projects\w3clone-next"
function Read-FileSafe($path) { if ([System.IO.File]::Exists($path)) { return [System.IO.File]::ReadAllText($path, [System.Text.Encoding]::UTF8) } return "<<NOT FOUND>>" }
function Show-File($label, $path) { Write-Host ""; Write-Host "=== FILE: $label ===" -ForegroundColor Yellow; Write-Host (Read-FileSafe $path) }
function Show-Exists($label, $path) { $e = [System.IO.File]::Exists($path); $c = if ($e) {"Green"} else {"Red"}; $m = if ($e) {"[YES]"} else {"[NO] "}; Write-Host "  $m $label" -ForegroundColor $c }
Write-Host "### CBC KENYA SCHOOLS SNAPSHOT ###" -ForegroundColor Magenta
Write-Host "Date: $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
Write-Host ""
Write-Host "=== FILE TREE ===" -ForegroundColor Cyan
Get-ChildItem $root -Recurse -File | Where-Object { $_.FullName -notmatch "\\node_modules\\" -and $_.FullName -notmatch "\\.next\\" } | ForEach-Object { $_.FullName.Replace($root,"") }
Write-Host ""
Write-Host "=== KEY FILES EXIST? ===" -ForegroundColor Cyan
Show-Exists "app/layout.tsx"                          "$root\app\layout.tsx"
Show-Exists "app/page.tsx"                            "$root\app\page.tsx"
Show-Exists "app/globals.css"                         "$root\app\globals.css"
Show-Exists "app/components/ClientLayout.tsx"         "$root\app\components\ClientLayout.tsx"
Show-Exists "app/components/Sidebar.tsx"              "$root\app\components\Sidebar.tsx"
Show-Exists "app/components/RightSidebar.tsx"         "$root\app\components\RightSidebar.tsx"
Show-Exists "app/components/TabBar.tsx"               "$root\app\components\TabBar.tsx"
Show-Exists "app/components/GradeNav.tsx"             "$root\app\components\GradeNav.tsx"
Show-Exists "app/components/ExampleBox.tsx"           "$root\app\components\ExampleBox.tsx"
Show-Exists "app/components/QuizWidget.tsx"           "$root\app\components\QuizWidget.tsx"
Show-Exists "app/components/Navigation.tsx"           "$root\app\components\Navigation.tsx"
Show-Exists "app/[grade]/page.tsx"                    "$root\app\[grade]\page.tsx"
Show-Exists "app/[grade]/[subject]/page.tsx"          "$root\app\[grade]\[subject]\page.tsx"
Show-Exists "app/[grade]/[subject]/[topic]/page.tsx"  "$root\app\[grade]\[subject]\[topic]\page.tsx"
Show-Exists "lib/supabase.ts"                         "$root\lib\supabase.ts"
Show-Exists ".env.local"                              "$root\.env.local"
Show-Exists "supabase-schema.sql"                     "$root\supabase-schema.sql"
Show-File "app/layout.tsx"        "$root\app\layout.tsx"
Show-File "app/page.tsx"          "$root\app\page.tsx"
Show-File "app/globals.css"       "$root\app\globals.css"
Write-Host ""
Write-Host "=== ALL COMPONENTS ===" -ForegroundColor Cyan
Get-ChildItem "$root\app\components" -File | ForEach-Object { Show-File "components/$($_.Name)" $_.FullName }
Show-File "[grade]/page.tsx"              "$root\app\[grade]\page.tsx"
Show-File "[grade]/[subject]/page.tsx"    "$root\app\[grade]\[subject]\page.tsx"
Show-File "[grade]/[subject]/[topic]/page.tsx" "$root\app\[grade]\[subject]\[topic]\page.tsx"
Show-File "package.json"   "$root\package.json"
Show-File "tsconfig.json"  "$root\tsconfig.json"
Show-File "next.config.ts" "$root\next.config.ts"
Write-Host ""
Write-Host "=== .env.local (masked) ===" -ForegroundColor Cyan
if ([System.IO.File]::Exists("$root\.env.local")) { [System.IO.File]::ReadAllLines("$root\.env.local") | ForEach-Object { if ($_ -match "^(.*?)=(.*)$") { Write-Host "  $($matches[1])=$($matches[2].Substring(0,[Math]::Min(6,$matches[2].Length)))..." } } } else { Write-Host "  <<NOT FOUND>>" }
Write-Host ""
Write-Host "### SNAPSHOT DONE — PASTE ALL OUTPUT TO CLAUDE ###" -ForegroundColor Magenta
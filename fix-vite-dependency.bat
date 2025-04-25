
@echo off
echo ----------------------------------
echo Moving vite to dependencies...
echo ----------------------------------

:: Ensure npm is installed
where npm >nul 2>nul
if %errorlevel% neq 0 (
    echo npm is not installed or not in PATH.
    pause
    exit /b
)

:: Install vite as dependency
npm install vite --save

:: Add changes to git
git add .
git commit -m "Moved vite to dependencies"
git push origin main

echo ----------------------------------
echo All done! Check your Vercel deployment now.
echo ----------------------------------
pause

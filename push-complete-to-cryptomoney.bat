
@echo off
echo Setting up Git configuration...

REM Set GitHub user info (replace with your real GitHub email and name)
git config --global user.email "varshilsony@example.com"
git config --global user.name "Varshil Soni"

echo Initializing Git and pushing to GitHub...

git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/Varshilsony/cryptomoney.git
git push -u origin main

pause

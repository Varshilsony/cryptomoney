
@echo off
echo Initializing Git and pushing to GitHub...

git init
git add .
git commit -m "Initial commit for crypto project"
git branch -M main
git remote add origin https://github.com/Varshilsony/cryptomoney.git
git push -u origin main

pause

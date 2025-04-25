@echo off
echo Initializing Git and pushing to GitHub...

git init
git remote add origin https://github.com/Varshilsony/cryptomoney.git
git add .
git commit -m "Initial commit"
git branch -M main
git push -u origin main

pause
# GitHub Push Helper Script for AgroPulse Kisan Project
param (
    [string]$RepoUrl
)

if ([string]::IsNullOrWhiteSpace($RepoUrl)) {
    $RepoUrl = Read-Host "Please enter your GitHub Repository URL (e.g. https://github.com/username/pixel.git)"
}

if ([string]::IsNullOrWhiteSpace($RepoUrl)) {
    Write-Host "No URL provided. Exiting." -ForegroundColor Red
    exit 1
}

Write-Host "Configuring git remote 'origin' -> $RepoUrl..." -ForegroundColor Green
git remote remove origin 2>$null
git remote add origin $RepoUrl

Write-Host "Pushing code to GitHub on branch main..." -ForegroundColor Green
git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "🎉 Successfully pushed to GitHub!" -ForegroundColor Green
} else {
    Write-Host "⚠️ Push failed. Please verify that the repository exists on GitHub and your credentials are correct." -ForegroundColor Yellow
}

# Git Version Control Task - 1

## Overview
This task demonstrates fundamental Git operations, including initializing a repository, creating and switching branches, committing changes, merging branches, and pushing changes to a remote repository.

## Steps

### Step 1: Create Sample Files
Created two sample files:
- `sampleFile1.txt`
- `sampleFile2.txt`

### Step 2: Initialize Git Repository
Initialize a new Git repository:
```sh
git init
```

### Step 3: Create and Commit Files in the Main Branch
Added two files inside the `Task-1/` directory, staged, and committed them to the `main` branch:
```sh
git add .
git commit -m "Updated 2 Sample Files in Main Branch"
```

### Step 4: Push Changes to Remote Repository
Connected the local repository to a GitHub repository and pushed changes:
```sh
git remote add origin https://github.com/MuthuKaruppan25/Git.git
git push origin main
```

### Step 5: Create and Switch to a Feature Branch
Created and switched to a new branch named `muthu-feature`:
```sh
git checkout -b muthu-feature
```

### Step 6: Make Changes in the Feature Branch
Modified `sampleFile1.txt`, then staged and committed the changes:
```sh
git add .
git commit -m "Made Changes in existing files"
```

### Step 7: Push Feature Branch to Remote Repository
```sh
git push origin muthu-feature
```

### Step 8: Merge Feature Branch into Main
Switched back to `main`:
```sh
git checkout main
```
Merged `muthu-feature` into `main`:
```sh
git merge muthu-feature
```
Pushed the merged changes to GitHub:
```sh
git push origin main
```

## Summary
This task covered essential Git workflows, including:
- Initializing a repository
- Creating and managing branches
- Committing and pushing changes
- Merging feature branches into the main branch

This workflow helps maintain a structured and version-controlled codebase while enabling collaboration.

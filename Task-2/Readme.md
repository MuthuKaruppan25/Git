# Git Version Control Task - 2

## Task Overview
This task demonstrates the usage of a `.gitignore` file to exclude specific files and directories from being tracked by Git.

## Steps

### Step 1: Create and Use a `.gitignore` File
Create a `.gitignore` file in the project directory:
```sh
 touch .gitignore
```

### Step 2: Configure the Ignore File
Modify `.gitignore` to exclude certain file types and directories:
```
# Ignore log files
*.log  

# Ignore temporary files
*.tmp  

# Ignore specific directories
node_modules/  
```

### Step 3: Create Files Matching the Ignore Pattern
Create files and directories that match the `.gitignore` rules:
```sh
# Create a log file and a temporary file
 echo "Log File Created" > LogFile.log
 echo "Temp File Created" > tempFile.tmp

# Create a directory for node modules
 mkdir node_modules
```

### Step 4: Create Files That Are Not Ignored
Create additional files that are not ignored by `.gitignore`:
```sh
 touch pythonFile.py
 touch javascriptFile.js
```

### Step 5: Verify Staged Changes
Check the files that Git is tracking:
```sh
git status
```
**Expected Output:**
```
new file:   .gitignore
new file:   javascriptFile.js
new file:   pythonFile.py
```

### Step 6: Checking Ignored Files
Verify which files are ignored by `.gitignore`:
```sh
git check-ignore -v LogFile.log tempFile.tmp
```
**Expected Output:**
```
Task-2/.gitignore:2:*.log       LogFile.log
Task-2/.gitignore:5:*.tmp       tempFile.tmp
```

## Key Takeaways
- `.gitignore` helps prevent unnecessary files from being tracked.
- `git status` verifies which files are tracked.
- `git check-ignore -v <filename>` helps confirm which files are ignored and why.

## Next Steps
- Commit changes to the repository:
  ```sh
  git add .
  git commit -m "Added .gitignore and verified ignored files"
  git push origin main
  
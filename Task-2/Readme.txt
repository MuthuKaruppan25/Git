Git Version Control Task - 2

Step 1: Create and use a .gitignore file

 touch .gitignore

Step 2: Configure the ignore File

# Ignore log files
*.log  

# Ignore temporary files
*.tmp  

# Ignore specific directories
node_modules/  

Step 3 : Create File Matching the pattern

# Create a log file and a temporary file
$ echo "Log File Created" > LogFile.log
$ echo "Temp File Created" > tempFile.tmp

# Create a directory for node modules
$ mkdir node_modules

Step 4: Create Files That are Untrackable

pythonFile.py
javascriptFile.py

Step 5:  Verifying Staged Changes

git status

        new file:   .gitignore
        new file:   javascriptFile.js
        new file:   pythonFile.py

Step 6 : Checking Ignored Files

git check-ignore -v LogFile.log tempFile.tmp

Task-2/.gitignore:2:*.log       LogFile.log
Task-2/.gitignore:5:*.tmp       tempFile.tmp
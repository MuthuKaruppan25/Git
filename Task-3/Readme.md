# Git Version Control Task - 3

## Step 1: Create a Sample Text File
```bash
$ touch sample.txt
```

## Step 2: Adding and Committing Changes
### Add files to the staging area:
```bash
git add .
```
### Commit staged files:
```bash
git commit -m "Initial Commit"
```

## Step 3: Modify the Sample File
```bash
echo "Updating content to the sample file" >> sample.txt
```

## Step 4: Check the Status
```bash
git status
```
**Output:**
```
On branch main
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   sample.txt
```

## Step 5: Restore Changes Before Staging
```bash
git restore sample.txt
```

## Step 6: Check the Status
```bash
git status
```
**Output:**
```
On branch main
nothing to commit, working tree clean
```

---

# Restoring Changes After Staging

### Step 1: Modify the Sample File
```bash
echo "Modifying the File" >> sample.txt
```

### Step 2: Stage the File
```bash
git add .
```

### Step 3: Unstage the File
```bash
git restore --staged sample.txt
```

### Step 4: Undo Changes After Unstaging
```bash
git restore sample.txt
```

---

# Undo Commits Using Revert

### Step 1: Modify the Sample File
```bash
echo "Modifying the File" >> sample.txt
```

### Step 2: Stage and Commit Changes
```bash
git add .
git commit -m "Committed the changed file"
```

### Step 3: Find the Commit ID
```bash
git log --oneline
```

### Step 4: Revert the Commit
```bash
git revert <commit-id>
```

This will create a new commit that negates the previous commit while preserving the history.

---

# Undo Commits Using Reset

### Step 1: Modify the Sample File
```bash
echo "Modifying the File" >> sample.txt
```

### Step 2: Stage and Commit Changes
```bash
git add .
git commit -m "Committed the changed file"
```

### Step 3: Using Different Reset Modes

#### Soft Reset (Keeps changes staged but removes the commit)
```bash
git reset --soft HEAD~1
```

#### Mixed Reset (Keeps changes but unstages them and removes the commit)
```bash
git reset --mixed HEAD~1
```

#### Hard Reset (Deletes the commit and discards changes completely)
```bash
git reset --hard HEAD~1
```

---

## Conclusion
This task demonstrates various Git commands for tracking, staging, unstaging, and undoing changes. It covers restoring files before and after staging, reverting commits safely, and using different reset modes to modify commit history.


# Git Version Control Task - 6

## Task Overview
This task demonstrates how to use Git stash to temporarily save changes, switch branches, apply stashed changes, and manage multiple stashes.

---

## Steps Performed

### Step 1: Create a Sample Python File
```sh
echo "print('Hello World')" > app.py
```

### Step 2: Stage and Commit the File
```sh
git add .
git commit -m "Initial commit"
```

### Step 3: Apply Changes to the File
```sh
echo "print('Hi')" >> app.py  
```

### Step 4: Temporarily Save Changes Using Git Stash
```sh
git stash
```
- This command saves the changes and cleans the working directory.

### Step 5: Create and Switch to a New Branch
```sh
git checkout -b another-branch
```

### Step 6: Make Changes in the New Branch
```sh
echo "print('Another Branch')" >> app.py  
```

### Step 7: Stage and Commit Changes in the New Branch
```sh
git add .
git commit -m "Applied changes to another branch"
```

### Step 8: Switch Back to the Main Branch
```sh
git checkout main
```

### Step 9: Retrieve Stashed Changes
```sh
git stash pop
```
- This applies the most recent stashed changes and removes them from the stash list.

### Step 10: List All Stashes (If Multiple Stashes Exist)
```sh
git stash list
```

### Step 11: Apply a Specific Stash Without Removing It
```sh
git stash apply stash@{2}
```
- This applies the changes from a specific stash but keeps them in the stash list.

### Step 12: Remove a Specific Stash
```sh
git stash drop stash@{1}
```

---

## Summary
- **Used Git stash** to temporarily save uncommitted changes.
- **Switched branches** and applied changes in a different branch.
- **Retrieved stashed changes** using `git stash pop`.
- **Managed multiple stashes** by listing, applying, and dropping them.

This process helps manage work efficiently while switching between tasks in Git. 🚀
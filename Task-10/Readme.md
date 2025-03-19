# Git Version Control Task - 10

## Steps to Perform Git Operations

### Step 1: Create a Sample Python File
```sh
echo "print('Hello world')" > sample.py
```

### Step 2: Stage and Commit the File
```sh
git commit -m "Initial Commit"
```
**Output:**
```
[main 5f4b69b] Initial Commit
 1 file changed, 1 insertion(+)
 create mode 100644 Task-10/sample.py
```

### Step 3: Create a New Branch
```sh
git checkout -b feature-branch-2
```
**Output:**
```
Switched to a new branch 'feature-branch-2'
```

### Step 4: Modify the Existing File
```sh
echo "print('New Feature')" >> sample.py
```

### Step 5: Commit and Push Changes
```sh
git commit -m "Added a new feature"
git push origin feature-branch-2
```
**Output:**
```
Enumerating objects: 9, done.
Counting objects: 100% (9/9), done.
Delta compression using up to 8 threads
Compressing objects: 100% (4/4), done.
Writing objects: 100% (8/8), 665 bytes | 665.00 KiB/s, done.
Total 8 (delta 2), reused 0 (delta 0), pack-reused 0
```

### Step 6: Squash the Previous Commits
```sh
git rebase -i HEAD~2
```
**Output:**
```
Successfully rebased and updated refs/heads/feature-branch-2.
```

### Step 7: Force Push the Changes
```sh
git push origin feature-branch-2 -f
```
**Output:**
```
To https://github.com/MuthuKaruppan25/Git.git
 + 0aa5674...14e69fa feature-branch-2 -> feature-branch-2 (forced update)
```

### Step 8: Remove the Last Commit
```sh
git reset --hard HEAD~1
```
**Output:**
```
HEAD is now at 9aa58e2 Completed Task-9 and updated Readme files
```

### Step 9: Push the Reset Changes
```sh
git push origin feature-branch-2 -f
```
**Output:**
```
To https://github.com/MuthuKaruppan25/Git.git
 + 14e69fa...9aa58e2 feature-branch-2 -> feature-branch-2 (forced update)
```

### Step 10: Retrieve a Lost Commit Using Git Reflog
```sh
git reflog
```
**Identify the lost commit hash from the reflog output.**

### Step 11: Switch to `feature-branch-2`
```sh
git checkout feature-branch-2
```

### Step 12: Reset to the Specific Lost Commit
```sh
git reset --hard 14e69fa
```
**Output:**
```
HEAD is now at 14e69fa Initial Commit and Added Feature
```

### Step 13: Push the Restored Commit to the Repository
```sh
git push origin feature-branch-2
```
**Output:**
```
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Delta compression using up to 8 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (4/4), 375 bytes | 375.00 KiB/s, done.
Total 4 (delta 1), reused 0 (delta 0), pack-reused 0
```

## Key Takeaways
- **Rebasing & Squashing:** Helps keep commit history clean.
- **Force Push:** Needed when rewriting commit history, but should be used cautiously.
- **Git Reflog:** A lifesaver for recovering lost commits.
- **Branching Best Practices:** Always work on feature branches to keep the `main` branch stable.

This concludes Git Version Control Task - 10. 🚀


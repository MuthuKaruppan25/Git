# Git Version Control Task - 7

## Step 1: Create a Sample Python File
```sh
echo "print('Hello World')" > app.py  
```

## Step 2: Stage and Commit It
```sh
git commit -am "Initial commit"  
```
Output:
```
[main 4516e89] Initial commit
 1 file changed, 1 insertion(+)
 create mode 100644 Task-7/app.py
```

## Step 3: Create a New Branch
```sh
git checkout -b feature-branch  
```
Output:
```
Switched to a new branch 'feature-branch'
```

## Step 4: Make Changes and Commit Them
```sh
git commit -am "Added line 1"  
```
Output:
```
[feature-branch acf3d36] Added line 1
 1 file changed, 1 insertion(+)
```
```sh
echo "print('Added line 2')" >> app.py
git commit -am "Added line 2"  
```
Output:
```
[feature-branch 1c6e59a] Added line 2
 1 file changed, 1 insertion(+)
```

## Step 5: Move to Main Branch
```sh
git checkout main  
```
Output:
```
Switched to branch 'main'
```

## Step 6: Check Commits from Feature Branch
```sh
git log --oneline feature-branch  
```

## Step 7: Pick a Specific Commit to Merge Using Cherry-Pick
```sh
git cherry-pick acf3d36  
```
Output:
```
[main 2cf1bdc] Added line 1
 Date: Wed Mar 19 10:58:13 2025 +0530
 1 file changed, 1 insertion(+)
```

## Step 8: Resolve Conflicts If They Arise
```sh
git cherry-pick 1c6e59a  
```
Output:
```
Auto-merging Task-7/app.py
CONFLICT (content): Merge conflict in Task-7/app.py
error: could not apply 1c6e59a... Added line 2
```

### Resolve the Conflict
```sh
git add .
git cherry-pick --continue  
```
Output:
```
[main fffbdcf] Added line 2
 Date: Wed Mar 19 10:58:53 2025 +0530
 1 file changed, 4 insertions(+)
```

## Step 10: Pick Multiple Commits to Merge
```sh
git cherry-pick acf3d36 1c6e59a  
```

## Step 11: Revert a Cherry-Pick Commit Using Revert Command
```sh
git revert HEAD  
```
Output:
```
[main 25b6186] Revert "Added line 2"
 1 file changed, 1 deletion(-)
```


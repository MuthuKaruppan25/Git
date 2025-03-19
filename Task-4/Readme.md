# Git Version Control Task - 4

## Step 1: Create a Sample.txt File
```sh
echo "This is the sample content" > sample.txt 
```

## Step 2: Stage and Commit the Changes
```sh
git add . 
git commit -m "Initial commit"
```

## Step 3: Create a New Branch Called branch1
```sh
git checkout -b branch1
```

## Step 4: Update the Content in the Sample File
```sh
echo "This is branch1" >> sample.txt  
```

## Step 5: Stage and Commit the Changes
```sh
git add .
git commit -m "Modified the branch 1"
```

## Step 6: Switch to the Main Branch
```sh
git checkout main
```

## Step 7: Create a New Branch Called branch2
```sh
git checkout -b branch2
```

## Step 8: Update the Content in the Sample File
```sh
echo "This is branch2" >> sample.txt 
```

## Step 9: Stage and Commit the Changes
```sh
git add .
git commit -m "Modified branch2"
```

## Step 10: Merge branch1 into branch2
```sh
git merge branch1
```

### Merge Conflict Encountered:
```
Auto-merging sample.txt
CONFLICT (content): Merge conflict in sample.txt
Automatic merge failed; fix conflicts and then commit the result.
```

## Step 11: Check Which File Caused the Conflict
```sh
git status
```

### Output:
```
On branch branch2
You have unmerged paths.
  (fix conflicts and run "git commit")
  (use "git merge --abort" to abort the merge)

Unmerged paths:
  (use "git add <file>..." to mark resolution)
        both modified:   sample.txt
```

## Step 12: Identify the Conflict Location
```sh
git diff
```

### Example Output:
```
diff --cc sample.txt
index abc1234,def5678..0000000
--- a/sample.txt
+++ b/sample.txt
@@ -1,3 +1,3 @@
Hello, this is the first line.
This is the original content.
<<<<<<< HEAD
This is branch2.
=======
This is branch1.
>>>>>>> branch1
```

## Step 13: Manually Resolve the Conflict
Update `sample.txt` to:
```
This is the sample content
This is from branch1 and branch2
```

## Step 14: Check If Conflict is Resolved
```sh
git status
```

### Output:
```
On branch branch2
All conflicts fixed but you are still merging.
  (use "git commit" to conclude merge)

Changes to be committed:
        modified:   sample.txt
```

## Step 15: Conclude the Merge
```sh
git commit -m "Resolved the conflicts"
```

---

## Summary
This task demonstrated creating multiple branches, making modifications, and handling merge conflicts manually. The conflict in `sample.txt` was identified using `git diff` and resolved manually before finalizing the merge with a commit.


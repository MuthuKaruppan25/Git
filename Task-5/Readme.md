# Git Version Control Task - 5

## Task Overview
This task demonstrates how to modify commit history using Git rebase, including rewording, reordering, resolving conflicts, and squashing commits.

---

## Steps Performed

### Step 1: Create a Sample Text File
```sh
echo "This is a sample content" > sample.txt
```

### Step 2: Create Initial Commit
```sh
git add .
git commit -m "First commit"
```

### Step 3: Modify the Content
```sh
echo "Second commit content are added" >> sample.txt  
```

### Step 4: Create Second Commit
```sh
git add .
git commit -m "Second commit"
```

### Step 5: Modify the Content
```sh
echo "Third commit content are added" >> sample.txt  
```

### Step 6: Create Third Commit
```sh
git add .
git commit -m "Third commit"
```

### Step 7: Modify the Content
```sh
echo "Fourth commit content are added" >> sample.txt  
```

### Step 8: Create Fourth Commit
```sh
git add .
git commit -m "Fourth commit"
```

### Step 9: Open Interactive Editor for Rebase
```sh
git rebase -i HEAD~3
```
- Modify the commit message by replacing `pick` with `reword`.
- Edit the commit message and save it.

```sh
git rebase -i HEAD~3
Successfully rebased and updated refs/heads/main.
```

### Step 10: Change Commit Order
- Alter the order of commits in the interactive editor.
- If a conflict occurs, resolve it manually:

```sh
Auto-merging sample.txt
CONFLICT (content): Merge conflict in sample.txt
error: could not apply 03a1f79... Fourth commit
```

- Resolve conflicts by modifying the file and marking it resolved:
```sh
git add sample.txt
git rebase --continue
```

### Step 11: Squash Similar Commits
- Replace `pick` with `squash` in the interactive editor to merge previous commits.
- Edit the commit message accordingly.

```sh
Successfully rebased and updated refs/heads/main.
```

---

## Summary
- **Reworded commits** using `rebase -i`.
- **Changed commit order** and resolved conflicts.
- **Squashed similar commits** to merge changes cleanly.

This process helps maintain a clean and meaningful Git commit history. 

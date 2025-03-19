# Git Version Control Task - 9

## Step 1: Create a Local Repository & Push It to a Remote Service

1. Create a sample Python file.

## Step 2: Stage and Commit the File
```sh
git commit -m "Initial commit on main"
```
Output:
```
[main 9820da6] Initial commit on main
 1 file changed, 1 insertion(+)
 create mode 100644 Task-9/sample.py
```

## Step 3: Push Changes to the Main Branch
```sh
git push origin main
```
Output:
```
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
...
To https://github.com/YourUsername/Repository.git
   a0286c7..9820da6  main -> main
```

## Step 4: Create and Switch to a New Branch
```sh
git checkout -b new-feature-branch
```
Output:
```
Switched to a new branch 'new-feature-branch'
```

## Step 5: Modify the Python File
Add a loop that iterates from 0 to 4:
```python
for i in range(5):
    print(i)
```

## Step 6: Stage and Commit the Changes
```sh
git commit -m "Updated Loop code"
```
Output:
```
[new-feature-branch 4cea1cf] Updated Loop code
 1 file changed, 3 insertions(+), 1 deletion(-)
```

## Step 7: Push the Feature Branch to Remote Repository
```sh
git push origin new-feature-branch
```
Output:
```
Enumerating objects: 7, done.
Counting objects: 100% (7/7), done.
...
remote: Create a pull request for 'new-feature-branch' on GitHub by visiting:
remote:      https://github.com/YourUsername/Repository/pull/new/new-feature-branch
```

## Step 8: Create a Pull Request on GitHub
1. Open the GitHub repository.
2. Click on **Compare & Pull Request**.
3. Add a title and description explaining your changes.
4. Click **Create Pull Request**.
5. A team member reviews and approves the PR.
6. Once approved, click **Merge Pull Request**.

## Step 9: Merge the Changes into the Main Branch
Click **Merge Pull Request** to finalize the changes.

## Step 10: Update Your Local Repository
```sh
git checkout main
git pull origin main
```

## Key Takeaways
- **Branching Is Essential:** It helps isolate features without affecting the main branch.
- **Structured Workflow:** Creating feature branches, making changes, pushing, and merging ensures smooth collaboration.
- **Pull Requests Enable Code Reviews:** Ensure quality before merging.
- **Keep the Main Branch Updated:** Always pull the latest changes before working.

---

By following this workflow, you ensure a smooth and collaborative development process. 🚀


Git Version Control Task - 9

Step 1: Create a Local Repository & Push It to a Remote Service

1. Created the sample python file

Step 2: Stage and commit it.

git commit -m "Initial commit on main"                                                                                                  ─╯
[main 9820da6] Initial commit on main
 1 file changed, 1 insertion(+)
 create mode 100644 Task-9/sample.py

Step 3: Push it to the main branch

git push origin main                                                                                                                    ─╯
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Delta compression using up to 8 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (4/4), 347 bytes | 347.00 KiB/s, done.
Total 4 (delta 1), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
To https://github.com/MuthuKaruppan25/Git.git
   a0286c7..9820da6  main -> main

Step 4: Move to the new branch

git checkout -b  new-feature-branch                                                                                                     ─╯
Switched to a new branch 'new-feature-branch'

Step 5: Made changes in the py file

Added the loop that iterates from 0 to 4
for i in range(5):
    print(i)

Step 6: Stage and commit it.

git commit -m "Updated Loop code"                                                                                                       ─╯
[new-feature-branch 4cea1cf] Updated Loop code
 1 file changed, 3 insertions(+), 1 deletion(-)

Step 7: pushed to the feature branch

git push origin new-feature-branch                                                                                                      ─╯
Enumerating objects: 7, done.
Counting objects: 100% (7/7), done.
Delta compression using up to 8 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (4/4), 363 bytes | 363.00 KiB/s, done.
Total 4 (delta 1), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
remote: 
remote: Create a pull request for 'new-feature-branch' on GitHub by visiting:
remote:      https://github.com/MuthuKaruppan25/Git/pull/new/new-feature-branch
remote: 
To https://github.com/MuthuKaruppan25/Git.git
 * [new branch]      new-feature-branch -> new-feature-branch

Step 8: Open the Github dashboard

Click on "Compare & Pull Request".

Add a title & description explaining your changes.

Click "Create Pull Request".

A team member can review and approve the PR.

Once approved, click "Merge Pull Request".

Step 9 : Clicked Merge pull Request to merge the changes to the main branch

Step 10: Update your local repository

git checkout main
git pull origin main

Key Takeaways:
Understand the importance of branching – Helps isolate features without affecting the main branch.
Follow a structured workflow – Creating feature branches, making changes, pushing, and merging ensures smooth collaboration.
Pull Requests enable code reviews – Ensure quality before merging.
Keep the main branch updated – Always pull latest changes before working.

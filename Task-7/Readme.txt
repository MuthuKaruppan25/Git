Git Version Control Task - 7

Step 1: Create a sample python file

echo "print('Hello World')" > app.py  

Step 2: Stage and commit it

git commit -am "Initial commit"                                                                                                          ─╯
[main 4516e89] Initial commit
 1 file changed, 1 insertion(+)
 create mode 100644 Task-7/app.py

Step 3: Create a new branch
git checkout -b feature-branch                                                                                                          ─╯
Switched to a new branch 'feature-branch'

Step 4: Made the changes and committed it.

 git commit -am "Added line 1"                                                                                                           ─╯
[feature-branch acf3d36] Added line 1
 1 file changed, 1 insertion(+)

echo "print('Added line 2')" >> app.py 
git commit -am "Added line 2"                                                                                                           ─╯
[feature-branch 1c6e59a] Added line 2
 1 file changed, 1 insertion(+)

Step 5 : move to main branch

git checkout main                                                                                                                       ─╯
Switched to branch 'main'

Step 6: Check the commits from feature-branch

git log --oneline feature-branch  

Step 7: Pick the specific commit to merge using cherry-pick

git cherry-pick acf3d36                                                                                                                 ─╯
[main 2cf1bdc] Added line 1
 Date: Wed Mar 19 10:58:13 2025 +0530
 1 file changed, 1 insertion(+)

Step 8: Resolve the conflict if conflict arises

git cherry-pick 1c6e59a                                                                                                                 ─╯
Auto-merging Task-7/app.py
CONFLICT (content): Merge conflict in Task-7/app.py
error: could not apply 1c6e59a... Added line 2
hint: After resolving the conflicts, mark them with
hint: "git add/rm <pathspec>", then run
hint: "git cherry-pick --continue".
hint: You can instead skip this commit with "git cherry-pick --skip".
hint: To abort and get back to the state before "git cherry-pick",
hint: run "git cherry-pick --abort".

git add . 

git cherry-pick --continue                                                                                                              ─╯
[main fffbdcf] Added line 2
 Date: Wed Mar 19 10:58:53 2025 +0530
 1 file changed, 4 insertions(+)

Step 10: Pick the multiple commits to merge

git cherry-pick acf3d36 1c6e59a 

You can revert cherry pick commit using revert command

 git revert HEAD                                                                                                                         ─╯
[main 25b6186] Revert "Added line 2"
 1 file changed, 1 deletion(-)
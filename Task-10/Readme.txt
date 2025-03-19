Git Version Control Task - 10

Step 1 : Create a sample python file

echo "print('Hello world')" > sample.py   

Step 2: Stage and commit it.

git commit -m "Initial Commit"                                                                                                          ─╯
[main 5f4b69b] Initial Commit
 1 file changed, 1 insertion(+)
 create mode 100644 Task-10/sample.py

Step 3: Create a new branch
git checkout -b feature-branch-2                                                                                                        ─╯
Switched to a new branch 'feature-branch-2'

Step 4: Made changes in the existing file
echo "print                                                                                                                             ─╯
dquote> ('New Feature')" >> sample.py

Step 5: committed and pushed
it push origin feature-branch-2                                                                                                        ─╯
Enumerating objects: 9, done.
Counting objects: 100% (9/9), done.
Delta compression using up to 8 threads
Compressing objects: 100% (4/4), done.
Writing objects: 100% (8/8), 665 bytes | 665.00 KiB/s, done.
Total 8 (delta 2), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (2/2), completed with 1 local object.
remote: 
remote: Create a pull request for 'feature-branch-2' on GitHub by visiting:
remote:      https://github.com/MuthuKaruppan25/Git/pull/new/feature-branch-2
remote: 
To https://github.com/MuthuKaruppan25/Git.git
 * [new branch]      feature-branch-2 -> feature-branch-2

Step 6: Squash the previous commit
git rebase -i HEAD~2                                                                                                                    ─╯
[detached HEAD 14e69fa] Initial Commit and Added Feature
 Date: Wed Mar 19 19:28:34 2025 +0530
 1 file changed, 2 insertions(+)
 create mode 100644 Task-10/sample.py
Successfully rebased and updated refs/heads/feature-branch-2.

Step 7: Push the changes using force push

git push origin feature-branch-2 -f                                                                                                     ─╯
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Delta compression using up to 8 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (4/4), 375 bytes | 375.00 KiB/s, done.
Total 4 (delta 1), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
To https://github.com/MuthuKaruppan25/Git.git
 + 0aa5674...14e69fa feature-branch-2 -> feature-branch-2 (forced update)

Step 8: Remove the last commit

git reset --hard HEAD~1                                                                                                                 ─╯
HEAD is now at 9aa58e2 Completed Task-9 and updated Readme files

now the previous commit is lost

Step 9: Push it 
git push origin feature-branch-2 -f                                                                                                     ─╯
Total 0 (delta 0), reused 0 (delta 0), pack-reused 0
To https://github.com/MuthuKaruppan25/Git.git
 + 14e69fa...9aa58e2 feature-branch-2 -> feature-branch-2 (forced update)

 It  will push the empty files

Step 10: Specific Lost commit can be retrieved using git reflog

git reflog

mark the commit id of the lost commit

Step 11: Move to feature-branch-2

Step 12: Use git reset or git checkout to move to the specific commit

 git reset --hard 14e69fa                                                                                                                ─╯
HEAD is now at 14e69fa Initial Commit and Added Feature

Step 13: Push it to the repository

git push origin feature-branch-2                                                                                                        ─╯
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Delta compression using up to 8 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (4/4), 375 bytes | 375.00 KiB/s, done.
Total 4 (delta 1), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
To https://github.com/MuthuKaruppan25/Git.git
   9aa58e2..14e69fa  feature-branch-2 -> feature-branch-2
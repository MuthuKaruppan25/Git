Git Version Control Task - 4

Step 1 : Create a Sample.txt File

echo "This is the sample content" > sample.txt 

Step 2: Stage and commit the changes

git add . 
git commit -m "Initial commit"                                                                                                          ─╯
[main c4f5baa] Initial commit
 1 file changed, 1 insertion(+)
 create mode 100644 Task-4/sample.txt

Step 3: Create a new branch called branch1

git checkout -b branch1                                                                                                                 ─╯
Switched to a new branch 'branch1'

Step 4 : Update the content in the sample file

echo "This is branch1" >> sample.txt  

Step 5: Stage it and Commit the changes


 git add .

 git commit -m "Modified the branch 1"                                                                                                   ─╯
[branch1 c9f0a32] Modified the branch 1
 1 file changed, 1 insertion(+)

Step 6: Switch to the Main Branch

git checkout main                                                                                                                       ─╯
Switched to branch 'main'

Step 7 : Then Create the new branch called branch2

git checkout branch2                                                                                                                    ─╯
Switched to branch 'branch2'

Step 8: Update the content in the sample file

echo "This is branch2" >> sample.txt 

Step 9 : Stage and commit the changes

git add .
git commit -m "Modified branch2"                                                                                                        ─╯
[branch2 15f9ebd] Modified branch2
 1 file changed, 1 insertion(+)

Step 10: Merge the branch1 and branch2

git merge branch1                                                                                                                       ─╯
Auto-merging Task-4/sample.txt
CONFLICT (content): Merge conflict in Task-4/sample.txt
Automatic merge failed; fix conflicts and then commit the result.

Step 11: Checking which file has caused the conflict using status command

git status

On branch branch2
You have unmerged paths.
  (fix conflicts and run "git commit")
  (use "git merge --abort" to abort the merge)

Unmerged paths:
  (use "git add <file>..." to mark resolution)
        both modified:   sample.txt

no changes added to commit (use "git add" and/or "git commit -a")

Step 11: Using diff to identify where conflict occurs on the specific file

git diff

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
 This is branch3.
>>>>>>> branch2

Step 12: Manually solve the conflict by replacing the content.

This is the sample content
This is from branch1 and branch2

Step 13: Using Git status to check whether conflict has resolved

On branch branch2
All conflicts fixed but you are still merging.
  (use "git commit" to conclude merge)

Changes to be committed:
        modified:   sample.txt


Step 14: Then commit to conclude merge


 git commit -m "Resolved the conflicts"                                                                                                  ─╯
[branch2 00b28ac] Resolved the conflicts
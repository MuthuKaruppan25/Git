Git Version Control Task - 5

Step 1: Create a sample text file

echo "This is a sample content" > sample.txt

Step 2 : Create initial commit

git commit -m "First commit"

Step 3: Modify the content

echo "Second commit content are added" >> sample.txt  

Step 4 : Create Second commit

git commit -m "Second" commit"

Step 5: Modify the content

echo "Third commit content are added" >> sample.txt  

Step 6: Create Third commit

git commit -m "Third commit"  

Step 7: Modify the content

echo "Fourth commit content are added" >> sample.txt  

Step 6: Create Fourth commit

git commit -m "Fourth commit"  

Step 7: Open the interactive editor to modify the commits using rebase in interactive mode

git rebase -i HEAD~3 

Modify the commit message by replacing pick to reword

Then edit the message and save it.

git rebase -i HEAD~3                                                                                                                    ─╯
[detached HEAD cb147b8] Added content for second commit
 Date: Tue Mar 18 23:55:49 2025 +0530
 1 file changed, 1 insertion(+)
Successfully rebased and updated refs/heads/main.

Step 8: Change the order of the commit by alterating the position of the commit in the editor

If conflict occurs resolve the conflict and then use the command 
Auto-merging Task-5/sample.txt
CONFLICT (content): Merge conflict in Task-5/sample.txt
error: could not apply 03a1f79... Fourth commit
hint: Resolve all conflicts manually, mark them as resolved with
hint: "git add/rm <conflicted_files>", then run "git rebase --continue".
hint: You can instead skip this commit: run "git rebase --skip".
hint: To abort and get back to the state before "git rebase", run "git rebase --abort".
Could not apply 03a1f79... Fourth commit

Last commands done (2 commands done):
   pick cb147b8 Added content for second commit
   pick 03a1f79 Fourth commit
Next command to do (1 remaining command):
   pick 4076165 Third commit
  (use "git rebase --edit-todo" to view and edit)
You are currently rebasing branch 'main' on 'a702691'.
  (all conflicts fixed: run "git rebase --continue")

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        modified:   sample.txt


git rebase --continue

to save the changes

Step 9: Squash the similar commits by replacing the pick with Squash, It will merge the previous commit with current commit
We can also edit the commit message 

[detached HEAD dd08a0d] Added content for second commit ,Then Fourth commit and Then Third commit
 Date: Tue Mar 18 23:55:49 2025 +0530
 1 file changed, 9 insertions(+)
Successfully rebased and updated refs/heads/main.
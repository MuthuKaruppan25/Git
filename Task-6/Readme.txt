Git Version Control Task - 6

Step 1 : Create a sample python file

echo "print('Hello World')" > app.py

Step 2: Stage and commit 
git commit -m "Initial commit"                                                                                                          ─╯
[main 7730e3c] Initial commit
 1 file changed, 1 insertion(+)
 create mode 100644 Task-6/app.py

Step 3: Apply Changes in the file

echo "print('Hi')" >> app.py    

Step 4: Saved the changes temporarily using git stash command

git stash
Saved working directory and index state WIP on main: 7730e3c Initial commit

Step 5: Move to another branch

git checkout -b another-branch                                                                                                          ─╯
Switched to a new branch 'another-branch'

Step 6: Made Changes in the py file

echo "print('Another Branch')" >> app.py    

Step 7: Stage and commit it.
git commit -m "Applied changes to another branch"                                                                                       ─╯
[another-branch 01ad367] Applied changes to another branch
 1 file changed, 1 insertion(+)

Step 8: Move to the main Branch

git checkout main                                                                                                                       ─╯
Switched to branch 'main'

Step 9: Revoke the temporary changes of previous stash using pop

git stash pop
git checkout main                                                                                                                       ─╯
Switched to branch 'main'

Step 10 : If you created multiple stashes, you can list them Using

git stash list

Step 11: If you want to apply specific stash without removing it

git stash apply stash@{2} 

Step 12: If you want to drop the stash

git stash drop stash@{1} 
Dropped stash@{1} (2320b886363bef33a5b5b3df340d18be7d66edcf)
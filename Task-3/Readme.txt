Git Version Control Task - 3

Step 1 : Created the sample text file

sample.txt

Step 2 : 1. Adding and Committing Changes

To add files to the staging area:

git add .

To commit staged files:

git commit -m "Initial Commit"

Step 3 : Made Changes in the sample File

echo "Updating content to the sample file" >> sample.txt 

Step 4 : Checking the status

On branch main
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   sample.txt

Step 5: Restored the changes before stages using restore command

git restore sample.txt    

Step 6 : Checking the status

On branch main
nothing to commit, working tree clean


Restoring the changes after staging


Step 1: Modify the sample file

echo "Modifying the File" >> sample.txt 

Step 2: Stage the File

 git add . 

 Step 3: Unstage the file to undo changes

 git restore --staged sample.txt 

Step 4: Undo the changes after unstaging

git restore sample.txt 

Undo the commits using Revert

Step 1: Modify the sample file

echo "Modifying the File" >> sample.txt 

Step 2: Stage Changes and made commit

git add .    
git commit -m "Commited the changed file"                                                                                               ─╯
[main c9b75ae] Commited the changed file
 1 file changed, 1 insertion(+)

Step 3: Find the commit id to revert using log command

git log --oneline 

Step 4: Revert the commit 

git revert c9b75ae  

this will create the new commit that will negate the previous commit , this is considered to be safe approach because it 
keeps the history

Undo the commit using Reset 


Step 1: Modify the sample file

echo "Modifying the File" >> sample.txt 

Step 2: Stage Changes and made commit

git add .    
git commit -m "Commited the changed file"                                                                                               ─╯
[main c9b75ae] Commited the changed file
 1 file changed, 1 insertion(+)

Step 3: Using Git reset soft

git reset --soft HEAD~1 


Keeps the changes and keeps staged but removes the commit.

Using Git reset mixed

git reset --mixed HEAD~1  

Keeps the changes but unstage it and removes the commit

Using Git reset hard

git reset --hard HEAD~1

Deletes the commit and discards changes completely.
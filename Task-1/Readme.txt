Git Version Control Task - 1

Step 1: Created Two Sample Files
sampleFile1.txt
sampleFile2.txt

Step 2 : 1. Initialize Git Repository
The repository was initialized using:

git init

Step 3: Create and Commit Files in the Main Branch

Two sample files (sampleFile1.txt and sampleFile2.txt) were added inside the Task-1/ directory.
The files were staged and committed to the main branch:

git add .
git commit -m "Updated 2 Sample Files in Main Branch"

Step 4 : Push Changes to Remote Repository
The local repository was connected to GitHub, and changes were pushed:

git remote add origin https://github.com/MuthuKaruppan25/Git.git
git push origin main

Step 5: Create and Switch to a Feature Branch
A new branch named muthu-feature was created and checked out using:

git checkout -b muthu-feature

Step 6 : Make Changes in the Feature Branch
Modifications were made to sampleFile1.txt, then staged and committed:

git add .
git commit -m "Made Changes in existing files"

Step 7 : Push Feature Branch to Remote Repository

git push origin muthu-feature

Step 8:  Merge Feature Branch into Main
Switched back to main:

git checkout main

Merged the muthu-feature branch into main:

git merge muthu-feature

Verified the commit history and pushed the merged changes to GitHub:

git push origin main
Git Version Control Task - 8

Step 1: Go to .git/hooks directory

cd .git/hooks

Step 2: In the hooks, you can write scripts that executes before a commit is finalized or specific events

Here I have used pre-commit that is executed before the commit is finalized

Step 3: Written script for finding eslint errors for js files
ESLint errors occur when the ESLint tool detects that your JavaScript code violates its configured rules. 

In the .git/hooks , created pre-commit file

touch pre-commit

written the script for finding the errors

#!/bin/bash

echo "🔍 Running ESLint before committing..."

ESLINT_CONFIG="/Users/muthukaruppan/Desktop/Git/Task-8/eslint.config.js"
# Get all staged JavaScript filesnpx eslint --config "$ESLINT_CONFIG" $STAGED_FILES
STAGED_FILES=$(git diff --cached --name-only --diff-filter=ACM | grep '\.js$')

if [ -z "$STAGED_FILES" ]; then
  echo "✅ No JavaScript files to lint."
  exit 0
fi

npx eslint --config "$ESLINT_CONFIG" $STAGED_FILES

if [ $? -ne 0 ]; then
  echo "❌ Linting errors found! Aborting commit."
  exit 1
fi

echo "✅ ESLint passed. Proceeding with commit..."
exit 0

Step 4: Configured eslint.config.js for framing the rules 
export default [
    {
      files: ["**/*.js"],
      languageOptions: {
        ecmaVersion: "latest"
      },
      rules: {
        semi: ["error", "always"],
        "no-unused-vars": "warn",
        "no-console": "off"
      }
    }
  ];
  
Step 5: Create a Js file that violates the rules

// Example of ESLint errors

var unusedVariable = "Hello";  // ❌ 'unusedVariable' is assigned a value but never used (no-unused-vars)

function testFunction() { 
console.log("This is a test")   // ❌ Missing semicolon (semi)
}  

let x= 5  // ❌ Unexpected spaces around "=" (space-infix-ops)

if(true){console.log("No space after if") } // ❌ Missing space after `if` (keyword-spacing)

Step 6: Stage and commit it

git commit -m "Checking for existing es-lint errors"                                                                                    ─╯
🔍 Running ESLint before committing...

/Users/muthukaruppan/Desktop/Git/Task-8/error.js
  1:5   warning  'unusedVariable' is assigned a value but never used  no-unused-vars
  3:10  warning  'testFunction' is defined but never used             no-unused-vars
  4:30  error    Missing semicolon                                    semi
  7:5   warning  'x' is assigned a value but never used               no-unused-vars
  7:9   error    Missing semicolon                                    semi
  9:42  error    Missing semicolon                                    semi

✖ 6 problems (3 errors, 3 warnings)
  3 errors and 0 warnings potentially fixable with the `--fix` option.

❌ Linting errors found! Aborting commit.

Step 9: Fix it and Recommit

git commit -m "Checking for existing es-lint errors"                                                                                    ─╯
🔍 Running ESLint before committing...
✅ ESLint passed. Proceeding with commit...
[main af83238] Checking for existing es-lint errors
 2 files changed, 23 insertions(+)
 create mode 100644 Task-8/error.js
 create mode 100644 Task-8/eslint.config.js


Step 10: In a collaborative project all team members should have the same configuration of hooks to maintain the code
quality, Make it shared by pushing the hook setup to the repository

Step 11: Create a folder called githooks

mkdir .githooks

Step 12: Move the git hook setup from .git/hooks to .githooks folder 
mv .git/hooks/pre-commit Task-8/.githooks/pre-commit

Step 13:  You can configure the hooks using git config to use the script
git config core.hooksPath .githooks

Step 14: Hooks are configured it will be executable when you commit

git commit -m "Checking for existing es-lint errors"                                                                                    ─╯
🔍 Running ESLint before committing...

/Users/muthukaruppan/Desktop/Git/Task-8/error.js
  1:9  error  Missing semicolon  semi

✖ 1 problem (1 error, 0 warnings)
  1 error and 0 warnings potentially fixable with the `--fix` option.

Step 15: You can push the configuration to repository

Step 16: Team members can pull or clone the repository

Step 17: After cloning, They can configure the hook using git config

git config core.hooksPath .githooks

Step 18:  To check for configured hooks use the below command

git config --get core.hooksPath

this will return the configured githooks directory

.githooks

After this script will be executed when you commit
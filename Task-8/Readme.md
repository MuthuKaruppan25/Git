# Git Version Control Task - 8

## Introduction
This task demonstrates how to configure Git hooks to enforce ESLint checks on JavaScript files before committing. Git hooks are scripts that run automatically before or after certain Git events, ensuring code quality in collaborative projects.

---

## Steps to Implement Git Hooks for ESLint Checks

### Step 1: Navigate to the `.git/hooks` directory
```sh
cd .git/hooks
```

### Step 2: Create a pre-commit hook script
```sh
touch pre-commit
```

### Step 3: Write the pre-commit script to check for ESLint errors
Edit `pre-commit` and add the following content:
```sh
#!/bin/bash

echo "🔍 Running ESLint before committing..."

ESLINT_CONFIG="/Users/muthukaruppan/Desktop/Git/Task-8/eslint.config.js"
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
```

### Step 4: Configure ESLint rules
Create an `eslint.config.js` file and define the ESLint rules:
```js
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
```

### Step 5: Create a JavaScript file with ESLint errors
Create a file `error.js` with the following content:
```js
var unusedVariable = "Hello";  // ESLint warning: 'unusedVariable' is assigned a value but never used

function testFunction() {
console.log("This is a test")   // ESLint error: Missing semicolon
}  

let x= 5  // ESLint error: Unexpected spaces around "="

if(true){console.log("No space after if") } // ESLint error: Missing space after `if`
```

### Step 6: Stage and commit the file
```sh
git add .
git commit -m "Checking for existing ESLint errors"
```
If errors exist, the commit will be aborted:
```
🔍 Running ESLint before committing...
❌ Linting errors found! Aborting commit.
```

### Step 7: Fix errors and recommit
Fix the errors in `error.js` and run:
```sh
git add .
git commit -m "Fixed ESLint errors"
```
If the code passes ESLint checks, the commit will be successful.

### Step 8: Share the Git Hook with the Team
#### 8.1 Create a shared hooks directory
```sh
mkdir .githooks
```
#### 8.2 Move the hook script to the new directory
```sh
mv .git/hooks/pre-commit Task-8/.githooks/pre-commit
```
#### 8.3 Configure Git to use the custom hooks directory
```sh
git config core.hooksPath .githooks
```

### Step 9: Verify the Hook Configuration
To check if the hooks are configured correctly:
```sh
git config --get core.hooksPath
```
Expected output:
```
.githooks
```

### Step 10: Share the Configuration with the Team
1. Push the `.githooks` folder to the repository.
2. Team members should pull the latest changes.
3. After cloning, team members must configure the hooks using:
   ```sh
   git config core.hooksPath .githooks
   ```

---

## Conclusion
This setup ensures that all JavaScript files adhere to ESLint rules before committing, maintaining code quality across the team. The hook prevents commits with linting errors, enforcing consistency in the repository.

---

✅ **Now, every commit will be validated for ESLint rules automatically!** 🚀


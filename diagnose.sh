#!/bin/bash

echo "=== KAPUNKA SANITY SETUP DIAGNOSTIC ==="
echo "======================================"
echo

echo "1. CHECKING PROJECT STRUCTURE:"
echo "-----------------------------"
echo "Current directory: $(pwd)"
echo "Contents of current directory:"
ls -la
echo

echo "2. CHECKING SCHEMAS DIRECTORY:"
echo "-----------------------------"
if [ -d "schemas" ]; then
    echo "✅ schemas directory exists"
    echo "Contents of schemas directory:"
    ls -la schemas/
    echo
    echo "File sizes in schemas:"
    ls -la schemas/ | awk '{print $5, $9}'
    echo
else
    echo "❌ schemas directory does not exist"
fi
echo

echo "3. CHECKING SANITY CONFIG FILES:"
echo "--------------------------------"
if [ -f "sanity.config.ts" ]; then
    echo "✅ sanity.config.ts exists"
    echo "Contents:"
    cat sanity.config.ts
    echo
else
    echo "❌ sanity.config.ts does not exist"
fi

if [ -f "sanity.cli.ts" ]; then
    echo "✅ sanity.cli.ts exists"
    echo "Contents:"
    cat sanity.cli.ts
    echo
else
    echo "❌ sanity.cli.ts does not exist"
fi
echo

echo "4. CHECKING PACKAGE.JSON:"
echo "-------------------------"
echo "Sanity-related scripts:"
grep -i sanity package.json || echo "No sanity scripts found"
echo
echo "Sanity-related dependencies:"
grep -i sanity package.json | grep -v "scripts" || echo "No sanity dependencies found"
echo

echo "5. CHECKING ENVIRONMENT VARIABLES:"
echo "---------------------------------"
if [ -f ".env" ]; then
    echo "✅ .env file exists"
    echo "Contents:"
    cat .env
    echo
else
    echo "❌ .env file does not exist"
fi

if [ -f ".env.local" ]; then
    echo "✅ .env.local file exists"
    echo "Contents:"
    cat .env.local
    echo
else
    echo "❌ .env.local file does not exist"
fi
echo

echo "6. CHECKING NODE MODULES:"
echo "-------------------------"
echo "Sanity packages installed:"
npm list | grep -i sanity || echo "No sanity packages found"
echo

echo "7. CHECKING SCHEMA FILE CONTENTS:"
echo "---------------------------------"
if [ -f "schemas/index.ts" ]; then
    echo "schemas/index.ts contents:"
    cat schemas/index.ts
    echo
fi

if [ -f "schemas/product.ts" ]; then
    echo "schemas/product.ts exists (first 10 lines):"
    head -10 schemas/product.ts
    echo
else
    echo "❌ schemas/product.ts does not exist"
fi

if [ -f "schemas/page.ts" ]; then
    echo "schemas/page.ts exists (first 10 lines):"
    head -10 schemas/page.ts
    echo
else
    echo "❌ schemas/page.ts does not exist"
fi

echo "8. TESTING SANITY COMMANDS:"
echo "---------------------------"
echo "Testing 'npm run sanity --version':"
npm run sanity --version 2>&1
echo

echo "Testing 'npm run sanity':"
npm run sanity 2>&1
echo

echo "9. CHECKING FILE PERMISSIONS:"
echo "-----------------------------"
echo "Schema file permissions:"
if [ -d "schemas" ]; then
    ls -la schemas/
fi
echo

echo "10. CHECKING FOR SYNTAX ERRORS:"
echo "------------------------------"
echo "TypeScript check (if available):"
if command -v npx &> /dev/null; then
    npx tsc --noEmit --skipLibCheck schemas/index.ts 2>&1 || echo "TypeScript check failed or not available"
else
    echo "npx not available"
fi
echo

echo "=== DIAGNOSTIC COMPLETE ==="

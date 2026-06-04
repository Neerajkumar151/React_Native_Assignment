const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      processFile(fullPath);
    }
  }
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let changed = false;

  // Find const styles = getSomethingStyles(args...);
  const regex = /const styles = (get\w+Styles)\((.*?)\);/g;
  
  content = content.replace(regex, (match, funcName, args) => {
    changed = true;
    return `const styles = useMemo(() => ${funcName}(${args}), [${args}]);`;
  });

  if (changed) {
    // Add useMemo to react import if not present
    const reactImportRegex = /import\s+React(.*?)\s+from\s+['"]react['"];/;
    const reactImportRegexNoReact = /import\s+\{(.*?)\}\s+from\s+['"]react['"];/;
    
    if (!content.includes('useMemo')) {
      if (reactImportRegex.test(content)) {
        content = content.replace(reactImportRegex, (match, imports) => {
          if (imports) {
             if (!imports.includes('useMemo')) {
               return match.replace('{', '{ useMemo, ');
             }
             return match;
          } else {
             return match.replace('React', 'React, { useMemo }');
          }
        });
      } else if (reactImportRegexNoReact.test(content)) {
        content = content.replace(reactImportRegexNoReact, (match, imports) => {
           if (!imports.includes('useMemo')) {
             return match.replace('{', '{ useMemo, ');
           }
           return match;
        });
      } else {
        content = 'import React, { useMemo } from "react";\n' + content;
      }
    }
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log('Modified:', filePath);
  }
}

processDir(path.join(__dirname, 'src', 'Screens'));
processDir(path.join(__dirname, 'src', 'Components'));
console.log('Done.');

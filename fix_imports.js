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

  if (content.includes('useMemo(') && !content.includes('useMemo,')) {
    // It uses useMemo but might not import it
    const hasUseMemoImport = /import\s+.*\{.*useMemo.*\}.*from\s+['"]react['"]/.test(content);
    if (!hasUseMemoImport) {
        // Try to find an existing react import
        if (content.includes('import React from "react";')) {
            content = content.replace('import React from "react";', 'import React, { useMemo } from "react";');
            changed = true;
        } else if (content.includes("import React from 'react';")) {
            content = content.replace("import React from 'react';", "import React, { useMemo } from 'react';");
            changed = true;
        } else if (content.includes('import React,')) {
            // e.g. import React, { useState } from 'react';
            content = content.replace(/import\s+React,\s*\{\s*/, 'import React, { useMemo, ');
            changed = true;
        } else {
            content = 'import { useMemo } from "react";\n' + content;
            changed = true;
        }
    }
  }

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log('Fixed imports in:', filePath);
  }
}

processDir(path.join(__dirname, 'src', 'Screens'));
processDir(path.join(__dirname, 'src', 'Components'));
console.log('Done fixing imports.');

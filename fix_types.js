const fs = require('fs');
const path = require('path');

const stylesDir = path.join(__dirname, 'src', 'Styles');
const files = fs.readdirSync(stylesDir).filter(f => f.endsWith('.ts'));

for (const file of files) {
  const filePath = path.join(stylesDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  
  let needsImport = false;
  
  if (content.includes('spacing: any')) {
    content = content.replace(/spacing:\s*any/g, 'spacing: Spacing');
    needsImport = true;
  }
  if (content.includes('radius: any')) {
    content = content.replace(/radius:\s*any/g, 'radius: Radius');
    needsImport = true;
  }
  if (content.includes('typography: any')) {
    content = content.replace(/typography:\s*any/g, 'typography: Typography');
    needsImport = true;
  }
  
  if (needsImport) {
    const importsToAdd = [];
    if (content.includes('Spacing') && !content.includes('import { Spacing }')) importsToAdd.push('import { Spacing } from "../theme/spacing";');
    if (content.includes('Radius') && !content.includes('import { Radius }')) importsToAdd.push('import { Radius } from "../theme/radius";');
    if (content.includes('Typography') && !content.includes('import { Typography }')) importsToAdd.push('import { Typography } from "../theme/typography";');
    
    if (importsToAdd.length > 0) {
      content = importsToAdd.join('\n') + '\n' + content;
    }
    
    fs.writeFileSync(filePath, content);
  }
}
console.log('Types fixed in Styles dir.');

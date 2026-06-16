const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const glob = execSync('ls -d src/components/tools/*/info-block.tsx').toString().trim().split('\n');

let fixed = [];

for (const file of glob) {
  let content = fs.readFileSync(file, 'utf-8');

  // Case 1: <Credits heading="" headingId="credits-source">  →  <Credits>
  content = content.replace(/<Credits heading="" headingId="credits-source">/g, '<Credits>');

  // Case 2: <Credits heading="" headingId="credits-source-libraries">  →  <Credits heading="Credits & Source Libraries" headingId="credits-source-libraries">
  content = content.replace(
    /<Credits heading="" headingId="credits-source-libraries">/g,
    '<Credits heading="Credits & Source Libraries" headingId="credits-source-libraries">'
  );

  if (content !== fs.readFileSync(file, 'utf-8')) {
    fs.writeFileSync(file, content);
    fixed.push(path.basename(path.dirname(file)));
  }
}

console.log('Fixed ' + fixed.length + ' files:');
console.log(fixed.join('\n'));

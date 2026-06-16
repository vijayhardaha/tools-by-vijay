const fs = require('fs');
const glob = require('child_process')
  .execSync('ls src/components/tools/*/example-block.tsx')
  .toString()
  .trim()
  .split('\n');

for (const file of glob) {
  let content = fs.readFileSync(file, 'utf-8');

  // Add Button import if not present
  if (!content.includes('import { Button }')) {
    content = content.replace(
      "import type { JSX } from 'react';",
      "import type { JSX } from 'react';\nimport { Button } from '@/components/ui/button';"
    );
  }

  // Replace <button with <Button variant="primary"
  // Remove type="button" and className from buttons
  // Pattern: <button\n        type="button"\n        onClick={...}\n        className="..."
  // Replace with: <Button variant="primary"\n        onClick={...}
  content = content.replace(
    /<button\s*\n\s*type="button"\s*\n\s*onClick=\{([^}]+)\}\s*\n\s*className="[^"]*"\s*\n\s*>/g,
    '<Button variant="primary"\n        onClick={$1}\n      >'
  );

  // Replace </button> with </Button>
  content = content.replace(/<\/button>/g, '</Button>');

  fs.writeFileSync(file, content);
  const slug = file.replace('src/components/tools/', '').replace('/example-block.tsx', '');
  console.log('Updated: ' + slug);
}

console.log('\nDone!');

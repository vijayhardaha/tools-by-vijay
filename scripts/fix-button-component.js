const fs = require('fs');
const glob = require('child_process')
  .execSync('ls src/components/tools/*/example-block.tsx')
  .toString()
  .trim()
  .split('\n');

for (const file of glob) {
  let content = fs.readFileSync(file, 'utf-8');

  // Replace the opening <button ... > with <Button variant="primary" onClick={...}>
  // Captures the onClick handler and discards type="button" and className
  content = content.replace(
    /<button\s*\n\s*type="button"\s*\n([\s\S]*?)className="[^"]*"\s*\n\s*>/g,
    '<Button variant="primary"\n$1>'
  );

  // Fix: </Button> is already correct from the previous script run
  // But double-check that </button> doesn't remain anywhere
  content = content.replace(/<\/button>/g, '</Button>');

  fs.writeFileSync(file, content);
  const slug = file.replace('src/components/tools/', '').replace('/example-block.tsx', '');
  console.log('Fixed: ' + slug);
}

console.log('\nDone!');

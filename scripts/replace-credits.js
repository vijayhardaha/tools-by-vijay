const fs = require('fs');
const path = require('path');

const toolsDir = path.join(__dirname, '..', 'src', 'components', 'tools');

// Get all tool directories
const tools = fs.readdirSync(toolsDir).filter((dir) => fs.statSync(path.join(toolsDir, dir)).isDirectory());

let updated = [];

for (const tool of tools) {
  const filePath = path.join(toolsDir, tool, 'info-block.tsx');
  if (!fs.existsSync(filePath)) continue;

  let content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');

  // Find the line with credits-source id
  let creditsIdx = -1;
  let headingText = '';
  let headingId = '';

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const match = line.match(/id="(credits-source[^"]*)"/);
    if (match && line.includes('credits-source')) {
      creditsIdx = i;
      headingId = match[1];
      // Find the heading text - look at current and next lines
      for (let j = i; j < Math.min(i + 5, lines.length); j++) {
        // Check if heading text is on same line as closing h2 tag
        const sameLineMatch = lines[j].match(/<h2[^>]*>([^<]+)<\/h2>/);
        if (sameLineMatch) {
          headingText = sameLineMatch[1].trim();
          break;
        }
        // Check if heading text is on its own line before </h2>
        const nextLineMatch = lines[j].match(/^\s*([^<]+)\s*<\/h2>/);
        if (nextLineMatch && !lines[j].includes('<h2') && !lines[j].includes('</section>')) {
          headingText = nextLineMatch[1].trim();
          break;
        }
      }
      break;
    }
  }

  if (creditsIdx === -1) continue;

  // Find the opening <section> tag that contains this heading
  let sectionStart = creditsIdx;
  for (let i = creditsIdx; i >= 0; i--) {
    if (lines[i].trimStart().startsWith('<section')) {
      sectionStart = i;
      break;
    }
  }

  // Find the closing </section> tag after the credits
  let sectionEnd = creditsIdx;
  for (let i = creditsIdx; i < lines.length; i++) {
    if (lines[i].trim() === '</section>') {
      sectionEnd = i;
      break;
    }
  }

  // Extract content (everything between </h2> and </section>)
  let contentStart = creditsIdx;
  for (let i = creditsIdx; i <= sectionEnd; i++) {
    if (lines[i].includes('</h2>')) {
      contentStart = i + 1;
      break;
    }
  }

  const contentLines = lines.slice(contentStart, sectionEnd);
  // Remove leading blank lines from content
  while (contentLines.length > 0 && contentLines[0].trim() === '') {
    contentLines.shift();
  }
  // Remove trailing blank lines from content
  while (contentLines.length > 0 && contentLines[contentLines.length - 1].trim() === '') {
    contentLines.pop();
  }
  const contentStr = contentLines.join('\n');

  // Build replacement
  const indent = lines[sectionStart].match(/^(\s*)/)[1];

  let replacement;
  if (headingText === 'Credits & Source') {
    replacement = indent + '<Credits>\n' + contentStr + '\n' + indent + '</Credits>';
  } else {
    replacement =
      indent
      + '<Credits heading="'
      + headingText
      + '" headingId="'
      + headingId
      + '">\n'
      + contentStr
      + '\n'
      + indent
      + '</Credits>';
  }

  // Replace
  const before = lines.slice(0, sectionStart).join('\n');
  const after = lines.slice(sectionEnd + 1).join('\n');
  content = before + '\n' + replacement + '\n' + after;

  // Add import if not present
  if (!content.includes('import { Credits')) {
    content = content.replace(
      "from '@/components/tools/tool-faq';",
      "from '@/components/tools/tool-faq';\nimport { Credits } from '@/components/tools/tool-credits';"
    );
  }

  fs.writeFileSync(filePath, content);
  updated.push(tool);
}

console.log('Updated ' + updated.length + ' files:');
console.log(updated.join('\n'));

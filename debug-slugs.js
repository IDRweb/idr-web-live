const fs = require('fs');
const path = require('path');

// Test slug extraction logic
function extractSlug(filename) {
  const slugArr = filename.replace('.md', '').split('-');
  slugArr.splice(0, 3); // Remove date parts
  return slugArr.join('-');
}

// Test with our files
const testFiles = [
  '2025-01-02-fangs.md',
  '2025-01-03-dessulfuracio.md',
  '2025-01-10-testbed.md'
];

console.log('=== SLUG EXTRACTION TEST ===');
testFiles.forEach(file => {
  const slug = extractSlug(file);
  console.log(`${file} -> slug: "${slug}"`);
});

// Test the actual posts directory
const postsDir = path.join(process.cwd(), '_posts');
const locales = ['ca', 'es', 'en'];

console.log('\n=== ACTUAL POSTS BY LOCALE ===');
locales.forEach(locale => {
  const localeDir = path.join(postsDir, locale);
  if (fs.existsSync(localeDir)) {
    const files = fs.readdirSync(localeDir).filter(f => f.endsWith('.md'));
    console.log(`\n${locale.toUpperCase()}:`);
    files.forEach(file => {
      const slug = extractSlug(file);
      console.log(`  ${file} -> "${slug}"`);
    });
  } else {
    console.log(`\n${locale.toUpperCase()}: Directory not found`);
  }
}); 
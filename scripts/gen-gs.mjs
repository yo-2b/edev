import { readFileSync, writeFileSync } from 'fs';

const d = JSON.parse(readFileSync('../data_wp.json', 'utf8'));
const posts = d.posts;

function he(s) {
  return s
    .replace(/&#8217;/g, "'")
    .replace(/&#8220;/g, '\u201C')
    .replace(/&#8221;/g, '\u201D')
    .replace(/&#8230;/g, '...')
    .replace(/&amp;/g, '&');
}

function esc(s) {
  let r = s
    .replaceAll('\\', '\\\\')
    .replaceAll('"', '\\"')
    .replaceAll('\n', ' ')
    .replaceAll('\r', '');
  // Escape all non-ASCII chars to \uXXXX for safe clipboard transport
  return r.replace(/[^\x00-\x7F]/g, (ch) => {
    return '\\u' + ch.charCodeAt(0).toString(16).padStart(4, '0');
  });
}

const q = '"';
let lines = [];
lines.push('function populateSheet() {');
lines.push('  var ss = SpreadsheetApp.getActiveSpreadsheet();');
lines.push('  var sheet = ss.getSheetByName("Sheet1");');
lines.push('  sheet.clear();');
lines.push('  var data = [');
lines.push('    ["Blog Title","Keywords","Summary","URL"],');

for (const a of posts) {
  const title = esc(he(a.title.rendered || ''));
  const kw = esc(he(a.title.rendered || '').substring(0, 50));
  const url = 'https://www.edev-multimedia.com/' + a.slug;
  lines.push(`    ["${title}","${kw}","${kw}","${url}"],`);
}

lines.push('  ];');
lines.push('  sheet.getRange(1, 1, data.length, 4).setValues(data);');
lines.push('}');

const script = lines.join('\n');
writeFileSync('populate-sheet.gs', script);
console.log('Script length:', script.length);

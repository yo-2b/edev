const d = JSON.parse(require('fs').readFileSync('../data_wp.json','utf8'));
const posts = d.posts;

function he(s) {
  return s.replace(/&#8217;/g,"'").replace(/&#8220;/g,'"').replace(/&#8221;/g,'"').replace(/&#8230;/g,'...').replace(/&amp;/g,'&');
}

function esc(s) {
  return s.replace(/\/g,'\\').replace(/"/g,'\\"').replace(/\n/g,' ').replace(/\r/g,'');
}

let lines = [];
lines.push('function populateSheet() {');
lines.push('  var ss = SpreadsheetApp.getActiveSpreadsheet();');
lines.push('  var sheet = ss.getSheetByName("Sheet1");');
lines.push('  sheet.clear();');
lines.push('  var data = [');
lines.push('    ["Blog Title","Keywords","Summary","URL"],');

posts.forEach((a) => {
  const title = esc(he(a.title.rendered || ''));
  const kw = esc(title.substring(0, 50));
  const url = 'https://www.edev-multimedia.com/' + a.slug;
  lines.push('    ["' + title + '","' + kw + '","' + kw + '","' + url + '"],');
});

lines.push('  ];');
lines.push('  sheet.getRange(1, 1, data.length, 4).setValues(data);');
lines.push('}');

const script = lines.join('\n');
require('fs').writeFileSync('scripts/populate-sheet.gs', script);
console.log('Script length:', script.length);

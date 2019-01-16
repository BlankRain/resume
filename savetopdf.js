var Nightmare = require('nightmare');		
var nightmare = Nightmare({ show: true });
var fileName= process.argv[2]||'2018_07'
console.log()

nightmare
  .goto(`https://github.com/BlankRain/resume/blob/master/Brain_${fileName}.md`)
  .wait('#readme')
  .inject('js','./githubpdf.js')
  .pdf(`./Brain_${fileName}.pdf`,{
        marginsType: 0,
        printBackground: true,
        printSelectionOnly: false,
        landscape: false,
        pageSize :'A4'
    })
  .end()
  .then(function (result) {
    console.log('Done!');
  })
  .catch(function (error) {
    console.error('Some Error:', error);
  });
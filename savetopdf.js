var Nightmare = require('nightmare');		
var nightmare = Nightmare({ show: true });

nightmare
  .goto('https://github.com/BlankRain/resume/blob/master/BR.MD')
  .wait('#readme')
  .inject('js','./githubpdf.js')
  .pdf("./BR.pdf",{
        marginsType: 0,
        printBackground: false,
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
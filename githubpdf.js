/**
打开md文件,f12 放控制台执行一下~ 
另存为pdf
**/
function showOnlyReadMe(){
var x=['.site-footer-container','.file-header',
'.commit-tease','.file-navigation','.pagehead',
'.site-header','.Header','.signup-prompt-bg'];
for(var i in x){
    var element=document.querySelector(x[i]);
    if(element) element.hidden=true;
}
}
showOnlyReadMe();

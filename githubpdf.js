/**
打开md文件,f12 放控制台执行一下~ 
另存为pdf
**/
function showOnlyReadMe(){
var x=['.site-footer-container','.file-header','.commit-tease','.file-navigation','.pagehead','.header'];
for(var i in x){
    document.querySelector(x[i]).hidden=true;
}
}

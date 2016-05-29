module.exports = WebBrowser;

function WebBrowser(){
}

WebBrowser.prototype.open = function(url){
  return 'Browsing to ' + url;
};
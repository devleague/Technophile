module.exports = WebBrowser;

function WebBrowser(){}

WebBrowser.prototype.open = function(url){
  var statusMessage = "Browsing to " + url;
  return statusMessage;
};
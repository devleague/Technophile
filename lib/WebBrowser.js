module.exports = WebBrowser;
function WebBrowser(url){
}
  WebBrowser.prototype.open = function (url){
    var statusMessage = "Browsing to " + url;
    return statusMessage;
};
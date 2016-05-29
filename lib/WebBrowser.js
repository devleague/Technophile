module.exports = WebBrowser;

/**
 * WebBrowser
 * open: Accepts a single argument url and returns
 * a status message.
 */

function WebBrowser() {

}

WebBrowser.prototype.open = function(url) {
  var message = "Browsing to " + url;
  return message;
};
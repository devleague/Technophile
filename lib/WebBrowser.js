function WebBrowser(){

}

WebBrowser.prototype.open = function(val){
  return  'Browsing to ' + val;
};
module.exports = WebBrowser;
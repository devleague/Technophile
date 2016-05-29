module.exports = function WebBrowser(){
  this.open = function (url){
    return 'Browsing to ' + url;
  };
};
module.exports = function WebBroswer() {
  this.open = function (url) {
    return "Browsing to " + url;
  };
};
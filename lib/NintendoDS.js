module.exports=NintendoDS;

var GameConsole = require('./GameConsole.js');
var WebBrowser = require('./WebBrowser.js');

extend(NintendoDS.prototype, GameConsole.prototype);
extend(NintendoDS.prototype, WebBrowser.prototype);

function extend(destination, source) {
  for (var i in source) {
    if (source.hasOwnProperty(i)) {
      destination[i] = source[i];
    }
  }
  return destination;
}

function NintendoDS() {
  this.systemName = 'Nintendo DS';

}
module.exports = NintendoDS;

var GameConsole = require('./GameConsole');
var WebBrowser = require('./WebBrowser');
var extend = require('./extend');

function NintendoDS(sytemName){
  this.systemName = "Nintendo DS";
}

extend(NintendoDS.prototype,GameConsole.prototype);
extend(NintendoDS.prototype,WebBrowser.prototype);
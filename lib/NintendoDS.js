var GameConsole = require('./GameConsole');
var WebBrowser = require('./WebBrowser');
var extend = require('./Extend');

function nds(){
  GameConsole.call(this,'Nintendo DS');
}
extend(nds.prototype,GameConsole.prototype);
extend(nds.prototype,WebBrowser.prototype);

module.exports = nds;
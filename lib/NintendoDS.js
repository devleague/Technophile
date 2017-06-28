const extend = require('./extend');
const GameConsole = require('./GameConsole');
const WebBrowser = require('./WebBrowser');

function NintendoDS(){
   GameConsole.call(this, 'Nintendo DS');
   WebBrowser.call(this);
}

NintendoDS.prototype = extend(GameConsole.prototype, WebBrowser.prototype);

module.exports = NintendoDS;
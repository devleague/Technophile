var GameConsole = require("./GameConsole.js");
var WebBrowser = require("./WebBrowser.js");
var extend = require("./extend");

module.exports = NintendoDS; 

function NintendoDS (){

}
extend(NintendoDS.prototype, GameConsole.prototype);
extend(NintendoDS.prototype, WebBrowser.prototype);

GameConsole.call(NintendoDS.prototype, 'Nintendo DS');
WebBrowser.call(NintendoDS.prototype, 'NintendoDS');

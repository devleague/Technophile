var extend = require('./extends');
var GameConsole = require('./GameConsole');
var WebBrowser = require('./WebBrowser');

function NintendoDS(systemName) {
  this.systemName = 'Nintendo DS';
}

NintendoDS.prototype = Object.create(GameConsole.prototype, {
    constructor: NintendoDS
  });


extend(NintendoDS.prototype, WebBrowser.prototype);

 module.exports = NintendoDS;
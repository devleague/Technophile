var GameConsole = require('./GameConsole');
var WebBrowser = require('./WebBrowser');
var extend = require('./extend');

module.exports = NintendoDS;

function NintendoDS () {
  GameConsole.call(this, 'Nintendo DS');
}

NintendoDS.prototype = Object.create(GameConsole.prototype, {
  constructor: {
    value: NintendoDS
  }
});

extend(NintendoDS.prototype, WebBrowser.prototype);
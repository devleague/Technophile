var GameConsole = require('../lib/GameConsole.js');
var WebBrowser = require('../lib/WebBrowser.js');

module.exports = NintendoDS;
/**
 * NintendoDS
 * Inherits from the GameConsole and WebBrowser classes.
 * Invokes the GameConsole class constructor with
 * the hard coded constructor argument 'Nintendo DS'
 */

function NintendoDS() {
  GameConsole.call(this, "Nintendo DS");
  WebBrowser.call(this);
}

extend(NintendoDS.prototype, GameConsole.prototype);
extend(NintendoDS.prototype, WebBrowser.prototype);

function extend(destination, source) {
  for(var k in source) {
    if (source.hasOwnProperty(k)) {
      destination[k] = source[k];
    }
  }
  return destination;
}

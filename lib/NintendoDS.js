module.exports = NintendoDS;
var GameConsole = require('../lib/GameConsole');
var WebBrowser = require('../lib/WebBrowser');
// function extend(destination, source) {
//   for (var k in source) {
//     if (source.hasOwnProperty(k)) {
//       destination[k] = source[k];
//     }
//   }
//   return destination;
// }
function extend(destination, source) {
    for (var k in source) {
      if (source.hasOwnProperty(k)) {
        destination[k] = source[k];
      }
    }
    return destination;
}

function NintendoDS(){
  this.systemName = "Nintendo DS";
}

extend(NintendoDS.prototype, GameConsole.prototype);
extend(NintendoDS.prototype, WebBrowser.prototype);
var Tablet = require('../lib/Tablet.js');
var Watch = require('../lib/Watch.js');

module.exports = SmartWatch;

/**
 * SmartWatch
 * Inherits from the Watch class and the Tablet class.
 * Invokes the Watch class constructor.
 */

function SmartWatch() {
  Tablet.call(this);
  Watch.call(this);
}

extend(SmartWatch.prototype, Tablet.prototype);
extend(SmartWatch.prototype, Watch.prototype);
function extend(destination, source) {
  for(var k in source) {
    if (source.hasOwnProperty(k)) {
      destination[k] = source[k];
    }
  }
  return destination;
}
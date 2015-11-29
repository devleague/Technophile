var Watch = require('./Watch');
var Tablet = require('./Tablet');
var extend = require('./extend');

module.exports = SmartWatch;

function SmartWatch () {
  Watch.call(this, Watch);
}

SmartWatch.prototype = Object.create(Watch.prototype, {
  constructor: {
    value: SmartWatch
  }
});

extend(SmartWatch.prototype, Tablet.prototype);
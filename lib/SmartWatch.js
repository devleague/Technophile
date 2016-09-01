var Watch = require('./Watch');
var Tablet = require('./Tablet');
var extend = require('./extend');

module.exports = SmartWatch;

function SmartWatch() {
  Watch.call(this);
}

extend(SmartWatch.prototype, Watch.prototype);
extend(SmartWatch.prototype, Tablet.prototype);


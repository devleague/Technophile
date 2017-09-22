var extend = require('./extends');
var Watch = require('./Watch');
var Tablet = require('./Tablet');

function SmartWatch(bodyPart) {
  Watch.call(this, bodyPart);
}

SmartWatch.prototype = Object.create(Watch.prototype);

extend(SmartWatch.prototype, Tablet.prototype);

module.exports = SmartWatch;
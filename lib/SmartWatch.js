module.exports = SmartWatch;
var Watch = require('../lib/Watch');
var Tablet = require('../lib/Tablet');
var extend = require('../lib/extendUtil');

function SmartWatch(){
  Watch.call(this);
}

extend(SmartWatch.prototype, Watch.prototype);
extend(SmartWatch.prototype, Tablet.prototype);
var Watch = require('./Watch.js');
var Tablet = require('./Tablet.js');
var extend = require('./extend.js');

module.exports = SmartWatch;
function SmartWatch(bodyPart){
  Watch.call(this, bodyPart);
}

extend(SmartWatch.prototype, Watch.prototype);
extend(SmartWatch.prototype, Tablet.prototype);
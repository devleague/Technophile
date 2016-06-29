module.exports=SmartWatch;

var Watch = require('./Watch.js');
var Tablet = require('./Tablet.js');
var extend = require('./extend');

extend(SmartWatch.prototype, Watch.prototype);
extend(SmartWatch.prototype, Tablet.prototype);

function SmartWatch() {
  Watch.call(this, this.bodyPart);
}

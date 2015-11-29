module.exports=SmartWatch;

var Watch = require('./Watch.js');
var Tablet = require('./Tablet.js');

extend(SmartWatch.prototype, Watch.prototype);
extend(SmartWatch.prototype, Tablet.prototype);

function extend(destination, source) {
  for (var i in source) {
    if (source.hasOwnProperty(i)) {
      destination[i] = source[i];
    }
  }
  return destination;
}

function SmartWatch() {
  Watch.call(this, this.bodyPart);
}
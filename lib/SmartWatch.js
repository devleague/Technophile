module.exports = SmartWatch;

var Watch = require('./Watch');
var Tablet = require('./Tablet');
var extend = require('./extend');

function SmartWatch(){
  
}

extend(SmartWatch.prototype,Watch.prototype);
extend(SmartWatch.prototype,Tablet.prototype);
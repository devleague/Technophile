var extend = require("./extend.js");
var Watch = require('./Watch.js');
var Tablet = require('./Tablet.js');

module.exports = SmartWatch; 


function SmartWatch (){

}
extend(SmartWatch.prototype, Watch.prototype);
extend(SmartWatch.prototype, Tablet.prototype);

Watch.call(SmartWatch.prototype, "SmartWatch");
Tablet.call(SmartWatch.prototype, "SmartWatch");

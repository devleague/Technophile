var Tablet = require ("./Tablet.js");
var Watch = require ("./Watch.js");
var extend = require ("./extend.js");

module.exports = SmartWatch;

function SmartWatch () {

  Watch.call (this);

}

extend (SmartWatch.prototype, Tablet.prototype);
extend (SmartWatch.prototype, Watch.prototype);




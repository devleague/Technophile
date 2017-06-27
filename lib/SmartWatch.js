const extend = require('./extend');
const Watch = require('./Watch');
const Tablet = require('./Tablet');

function SmartWatch(){
  Watch.call(this);
};

SmartWatch.prototype = extend(Watch.prototype, Tablet.prototype);

module.exports = SmartWatch;

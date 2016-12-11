var screen = require('./Tablet');
var watch = require('./Watch');
var extend = require('./Extend');
function smartWatch(){
  watch.call(this);
}
extend(smartWatch.prototype,watch.prototype);
extend(smartWatch.prototype,screen.prototype);

module.exports = smartWatch;
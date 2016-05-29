var screen = require('./Tablet');
var Phone = require('./Phone');
var GameConsole = require('./GameConsole');
var WebBrowser = require('./WebBrowser');
var extend = require('./Extend');
function smartPhone(num){
  GameConsole.call(this, 'Smart Phone');
  Phone.call(this,num);
}
extend(smartPhone.prototype,Phone.prototype);
extend(smartPhone.prototype,screen.prototype);
extend(smartPhone.prototype,GameConsole.prototype);
extend(smartPhone.prototype,WebBrowser.prototype);

module.exports = smartPhone;
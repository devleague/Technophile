module.exports=SmartPhone;

var Phone = require('./Phone.js');
var Tablet = require('./Tablet.js');
var GameConsole = require('./GameConsole.js');
var WebBrowser = require('./WebBrowser.js');
var extend = require('./extend');

extend(SmartPhone.prototype, Phone.prototype);
extend(SmartPhone.prototype, Tablet.prototype);
extend(SmartPhone.prototype, GameConsole.prototype);
extend(SmartPhone.prototype, WebBrowser.prototype);

function SmartPhone(phoneNumber) {
  Phone.call(this, phoneNumber);
  this.systemName = 'Smart Phone';
}

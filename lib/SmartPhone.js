module.exports = SmartPhone;

var Phone = require('./Phone');
var Tablet = require('./Tablet');
var GameConsole = require('./GameConsole');
var WebBrowser = require('./WebBrowser');
var extend = require('./extend');

function SmartPhone(phoneNumber) {
  this.systemName = "Smart Phone";
  this.phoneNumber = phoneNumber;
}

extend(SmartPhone.prototype,Phone.prototype);
extend(SmartPhone.prototype,Tablet.prototype);
extend(SmartPhone.prototype,GameConsole.prototype);
extend(SmartPhone.prototype,WebBrowser.prototype);
module.exports=SmartPhone;

var Phone = require('./Phone.js');
var Tablet = require('./Tablet.js');
var GameConsole = require('./GameConsole.js');
var WebBrowser = require('./WebBrowser.js');

extend(SmartPhone.prototype, Phone.prototype);
extend(SmartPhone.prototype, Tablet.prototype);
extend(SmartPhone.prototype, GameConsole.prototype);
extend(SmartPhone.prototype, WebBrowser.prototype);

function extend(destination, source) {
  for (var i in source) {
    if (source.hasOwnProperty(i)) {
      destination[i] = source[i];
    }
  }
  return destination;
}

function SmartPhone(phoneNumber) {
  Phone.call(this, phoneNumber);
  this.systemName = 'Smart Phone';
}
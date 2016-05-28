module.exports = SmartPhone;
var Phone = require('../lib/Phone');
var Tablet = require('../lib/Tablet');
var GameConsole = require('../lib/GameConsole');
var WebBrowser = require('../lib/WebBrowser');

function SmartPhone(phoneNumber){
  this.phoneNumber = phoneNumber;
  this.systemName = "Smart Phone";
}

function extend(destination, source) {
    for (var k in source) {
      if (source.hasOwnProperty(k)) {
        destination[k] = source[k];
      }
    }
    return destination;
}

extend(SmartPhone.prototype,Phone.prototype);
extend(SmartPhone.prototype,Tablet.prototype);
extend(SmartPhone.prototype,GameConsole.prototype);
extend(SmartPhone.prototype,WebBrowser.prototype);
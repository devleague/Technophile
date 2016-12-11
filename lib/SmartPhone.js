module.exports = SmartPhone;
var Phone = require('../lib/Phone');
var Tablet = require('../lib/Tablet');
var GameConsole = require('../lib/GameConsole');
var WebBrowser = require('../lib/WebBrowser');
var extend = require('../lib/extendUtil');

function SmartPhone(phoneNumber){
  Phone.call(this, phoneNumber);
  GameConsole.call(this, "Smart Phone");
}

extend(SmartPhone.prototype,Phone.prototype);
extend(SmartPhone.prototype,Tablet.prototype);
extend(SmartPhone.prototype,GameConsole.prototype);
extend(SmartPhone.prototype,WebBrowser.prototype);
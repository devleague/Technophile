var Phone = require('./Phone');
var Tablet = require('./Tablet');
var GameConsole = require('./GameConsole');
var WebBrowser = require('./WebBrowser');
var extend = require('./extend');

module.exports = SmartPhone;

function SmartPhone (phoneNumber) {
  Phone.call(this, phoneNumber);
  GameConsole.call(this, 'Smart Phone');
}

SmartPhone.prototype = Object.create(Phone.prototype, {
  Constructor: {
    value: SmartPhone
  }
});

extend(SmartPhone.prototype, Tablet.prototype);
extend(SmartPhone.prototype, GameConsole.prototype);
extend(SmartPhone.prototype, WebBrowser.prototype);
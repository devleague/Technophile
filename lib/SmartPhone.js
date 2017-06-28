const extend = require('./extend');
const Phone = require('./Phone');
const Tablet = require('./Tablet');
const GameConsole = require('./GameConsole');
const WebBrowser = require('./WebBrowser');

function SmartPhone(phoneNumber){
  Phone.call(this, phoneNumber);
  GameConsole.call(this, 'Smart Phone')
}

SmartPhone.prototype = extend(Phone.prototype, Tablet.prototype);
extend(SmartPhone.prototype, GameConsole.prototype);
extend(SmartPhone.prototype, WebBrowser.prototype);

module.exports = SmartPhone;
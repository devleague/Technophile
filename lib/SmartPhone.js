var extend = require('./extend.js');
var Phone = require('./Phone.js');
var Tablet = require('./Tablet.js');
var GameConsole = require('./GameConsole.js');
var WebBrowser = require('./WebBrowser.js');

module.exports = SmartPhone; 
extend(SmartPhone.prototype, Phone.prototype);
extend(SmartPhone.prototype, Tablet.prototype);
extend(SmartPhone.prototype, GameConsole.prototype);
extend(SmartPhone.prototype, WebBrowser.prototype);

function SmartPhone (phoneNumber, systemName){
	Phone.call(this, phoneNumber);
}

GameConsole.call(SmartPhone.prototype, 'Smart Phone');

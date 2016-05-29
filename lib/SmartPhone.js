var Phone = require('../lib/Phone.js');
var Tablet = require('../lib/Tablet.js');
var GameConsole = require('../lib/GameConsole.js');
var WebBrowser = require('../lib/WebBrowser.js');

module.exports = SmartPhone;

/**
 * Smart Phone
 * Inherits from Phone, Tablet, GameConsole, WebBrowser classes.
 * Accepts a signle argument phoneNumber and invoke the Phone class
 * constructor passing in phoneNumber, and invoke
 * the Game Console class constructor with the hard coded constructor argument 'Smart Phone'
 */

function SmartPhone(phoneNumber) {
  Phone.call(this, phoneNumber);
  GameConsole.call(this, 'Smart Phone');
}

extend(SmartPhone.prototype, Phone.prototype);
extend(SmartPhone.prototype, GameConsole.prototype);
extend(SmartPhone.prototype, WebBrowser.prototype);
extend(SmartPhone.prototype, Tablet.prototype);

function extend(destination, source) {
  for(var k in source) {
    if (source.hasOwnProperty(k)) {
      destination[k] = source[k];
    }
  }
  return destination;
}
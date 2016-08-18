var Phone = require ("./Phone.js");
var Tablet = require ("./Tablet.js");
var GameConsole = require ("./GameConsole.js");
var WebBrowser = require ("./WebBrowser.js");
var extend = require ("./extend.js");

module.exports = SmartPhone;

function SmartPhone (phoneNumber) {

  GameConsole.call (this, "Smart Phone");
  Phone.call (this, phoneNumber);

}

  extend (SmartPhone.prototype, Phone.prototype);
  extend (SmartPhone.prototype, Tablet.prototype);
  extend (SmartPhone.prototype, GameConsole.prototype);
  extend (SmartPhone.prototype, WebBrowser.prototype);

var extend = require("./extend.js");
var WebBrowser = require("./WebBrowser.js");
var GameConsole = require("./GameConsole.js");
module.exports = NintendoDS;


function NintendoDS () {

  GameConsole.call(this, "Nintendo DS");

  //calling GameConsole here is every instance vs on the prototype level and if set outside of funciton
}
  //move outside of function to be on the prototype, which runs once, not every instance
  //extend(source,then destination)
  extend(NintendoDS.prototype, WebBrowser.prototype);
  extend(NintendoDS.prototype, GameConsole.prototype);
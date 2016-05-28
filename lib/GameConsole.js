module.exports = GameConsole;

function GameConsole(systemName){
  this.systemName = systemName;
}

GameConsole.prototype.play = function(game){
  var statusMessage = this.systemName + " plays " + game.title;
  return statusMessage;
};
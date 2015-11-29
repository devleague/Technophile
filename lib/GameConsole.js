module.exports=GameConsole;

function GameConsole(name) {
  this.systemName = name;
}

GameConsole.prototype.play = function(game) {
  return this.systemName + ' plays ' + game.title;
};
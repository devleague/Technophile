module.exports = GameConsole;
function GameConsole(systemName){
  this.systemName = systemName;
}
  GameConsole.prototype.play = function(game){
    // this.game = {
    //   title: '' + game
    // };
    return this.systemName + ' plays ' + game.title;
  };
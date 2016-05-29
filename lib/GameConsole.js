module.exports = function GameConsole(systemName){
  this.systemName = systemName;
  this.play = function(game){
    this.game = {
      title: '' + game
    };
    return this.systemName + ' plays ' + game.title;
  };
};
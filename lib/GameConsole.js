module.exports = GameConsole;

function GameConsole (systemName) {

  this.systemName = systemName;

}

 GameConsole.prototype.play = function (game) {

    var object = {

      title: " "

  };

    return this.systemName + " plays " + game.title;

};
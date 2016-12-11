
function GameConsole(val){
  this.systemName = val;
}
GameConsole.prototype.play = function(val){
  return this.systemName + ' plays ' + val.title;
};
module.exports = GameConsole;


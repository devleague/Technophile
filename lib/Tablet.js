module.exports = Tablet;
function Tablet(x, y){
  this.x = x;
  this.y = y;
}
  Tablet.prototype.touch = function(x, y){
    var obj = {
      x: x,
      y: y
    };
    return obj;
};
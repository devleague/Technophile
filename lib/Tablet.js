module.exports = function Tablet(){
  this.touch = function(x, y){
    return {
      x: x,
      y: y
    };
  };
};
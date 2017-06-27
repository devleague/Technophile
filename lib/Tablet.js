function Tablet() {
}

Tablet.prototype.touch = function(x, y) {
  var obj = {
    x: x,
    y: y
  };
  return obj;
};

module.exports = Tablet;
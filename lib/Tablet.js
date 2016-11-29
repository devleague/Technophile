module.exports = Tablet;

/**
 * Tablet
 * The class should define a touch method
 * that accepts two arguments x and y and
 * return a literal object with keys x and y with values set to the method's arguments.
 */
function Tablet() {

}

Tablet.prototype.touch = function(x, y) {
  var obj = {
    x: x,
    y: y
  };
  return obj;
};
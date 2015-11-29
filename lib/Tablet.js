module.exports = Tablet;


function Tablet (x, y) {

}

Tablet.prototype.touch = function (x, y) {

  var object = {
  'x': x,
  'y': y,
  };
  return object;

};
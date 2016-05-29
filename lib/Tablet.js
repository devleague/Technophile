module.exports = function Tablet (x, y) {

  this.x = x;
  this.y = y;

  Tablet.prototype.touch = function (x, y) {

    var buttons = {

      x: x,
      y: y

    };

    return buttons;

  };

};


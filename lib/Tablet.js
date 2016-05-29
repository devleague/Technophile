module.exports = Tablet;

function Tablet (x, y) {

}

  Tablet.prototype.touch = function (x, y) {

    var objects = {

      x: x,
      y: y

    };

    return objects;

};


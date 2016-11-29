module.exports = Watch;

/**
 * wear: Accepts a single argument bodyPart
 * and assigns the value to this.bodyPart.
 */

function Watch() {
  this.bodyPart = null;
}

Watch.prototype.wear = function (bodyPart) {
  this.bodyPart = bodyPart;
};
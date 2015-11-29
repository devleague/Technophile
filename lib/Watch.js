module.exports = Watch;

function Watch () {
  this.bodyPart = null;

}

Watch.prototype.wear = function (bodyPart) {
  this.bodyPart = bodyPart;
};
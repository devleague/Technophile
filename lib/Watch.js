module.exports = Watch;
function Watch(bodyPart){
  this.bodyPart = null;
}
  Watch.prototype.wear = function (bodyPart){
    this.bodyPart = bodyPart;
};
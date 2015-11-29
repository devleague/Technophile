module.exports=Watch;

function Watch(wrist) {
  this.bodyPart = wrist;
}

Watch.prototype.wear = function(bodyPart) {
  this.bodyPart = bodyPart;
};
module.exports = Watch;

function Watch(){
  this.bodyPart = undefined;
}

Watch.prototype.wear = function(bodyPart){
  this.bodyPart = bodyPart;
};
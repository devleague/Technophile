module.exports = Watch;

function Watch(){
  this.bodyPart = 0;
  this.wear = function(bodyPart){
    this.bodyPart = bodyPart;
  };
}
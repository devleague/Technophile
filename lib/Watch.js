module.exports = function Watch(bodyPart){
  this.bodyPart = bodyPart;
  this.wear = function (bodyPart){
    this.bodyPart = bodyPart;
  };
};
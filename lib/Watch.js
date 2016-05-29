function Watch(){
  this.bodyPart = '';
}
Watch.prototype.wear = function(val){
  this.bodyPart  = val;
};

module.exports = Watch;
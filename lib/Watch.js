module.exports = Watch;

function Watch(){
}
Watch.prototype.bodyPart = 0;
Watch.prototype.wear = function(bodyPart){
    this.bodyPart = bodyPart;
};
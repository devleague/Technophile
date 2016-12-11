function Phone(num){
  this.phoneNumber = num;
}
Phone.prototype.callPhone = function(val){
  return this.phoneNumber + ' calls ' + val;
};

module.exports = Phone;
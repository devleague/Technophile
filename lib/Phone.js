module.exports = Phone;

function Phone(phoneNumber){
  this.phoneNumber = phoneNumber;
}

Phone.prototype.callPhone = function(phoneNumber){
  this.callPhone = phoneNumber;
  return this.phoneNumber  + ' calls ' + this.callPhone;
};

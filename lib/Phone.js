module.exports = Phone;

function Phone(phoneNumber){
  this.phoneNumber = phoneNumber;
}

Phone.prototype.callPhone = function(phoneNumber){
  this.callPhone = phoneNumber;
 var statusMsg = this.phoneNumber  + ' calls ' + this.callPhone;
 return statusMsg;
};

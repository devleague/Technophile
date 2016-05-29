module.exports = Phone;
function Phone(phoneNumber){
  this.phoneNumber = phoneNumber;
}
Phone.prototype.callPhone = function (phoneNumber){
  var statusMessage = this.phoneNumber + " calls " + phoneNumber;
  return statusMessage;
};
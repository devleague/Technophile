module.exports = function Phone(phoneNumber) {
  this.phoneNumber = phoneNumber;
  this.callPhone = function () {
    return phoneNumber + " calls " + 4444444;
  };
};
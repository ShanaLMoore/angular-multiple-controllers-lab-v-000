function StaffController () {
  this.name = "Jo";
  this.email = "Joseph@email.com";
  this.phone = "098-765-4321";
}

angular
  .module('app')
  .controller("StaffController", StaffController);
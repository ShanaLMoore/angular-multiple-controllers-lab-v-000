function ContactController () {
  var vm = this;

  this.name = "Shana";
  this.email = "Shana@gmail.com";
  this.phone = "123-456-7890";

  vm.changeName = function () {
    vm.name = 'Coolio';
  }
}

angular
  .module('app')
  .controller('ContactController', ContactController);
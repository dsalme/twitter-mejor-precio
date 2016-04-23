(function() {
  'use strict';
    angular.module('precioJusto')
      .controller('precioJustoController', precioJustoController);

      precioJustoController.$inject = ['precioJustoService'];

      function precioJustoController(precioJustoService){
        var vm = this;

        vm.onSearch = onSearch;
        vm.searchedProducts = [];

        function onSearch(){
          vm.searchedProducts = precioJustoService.getProductList();
        }
      }
}());

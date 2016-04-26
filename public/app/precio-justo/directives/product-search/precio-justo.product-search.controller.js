(function() {
  'use strict';
  angular.module('precioJusto')
    .controller('productSearchController', productSearchController);

    productSearchController.$inject = ['precioJustoService'];

    function productSearchController(precioJustoService){
      var vm = this;

      vm.searchProduct = searchProduct;

      function searchProduct(product){
        precioJustoService.searchProduct(product).then(function(){
            vm.onSearch();
        });
      }
    }
}());

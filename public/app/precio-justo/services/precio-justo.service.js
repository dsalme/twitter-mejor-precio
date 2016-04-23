(function() {
  'use strict';
  angular.module('precioJusto')
    .factory('precioJustoService', precioJustoService);

    precioJustoService.$inject = ['$q'];

    function precioJustoService($q){
      var publicInterface = {
        addProductToList: addProductToList,
        getProductList: getProductList,
        searchedProducts: [],
        searchProduct: searchProduct
      }
      return publicInterface;


      function addProductToList(product){
        publicInterface.searchedProducts.push(product);
      }

      function getProductList(){
        return publicInterface.searchedProducts;
      }

      function searchProduct(product){
        publicInterface.addProductToList(product)
      }
    }
}());

(function() {
  'use strict';
  angular.module('precioJusto')
    .factory('precioJustoService', precioJustoService);

    precioJustoService.$inject = ['$q', '$http'];

    function precioJustoService($q, $http){
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
        // publicInterface.addProductToList(product)
        var config = {
          url: "/precioJusto",
          method: "POST",
          data: {
            query: product
          }
        }
        return $http(config).then(function(response){
          console.log(response);
          if(response.data && response.data.statuses){
            publicInterface.searchedProducts = response.data.statuses;
          }
          return;
        });
      }
    }
}());

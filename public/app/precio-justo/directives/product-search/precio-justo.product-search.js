(function() {
  'use strict';
    angular.module('precioJusto')
      .directive('productSearch', productSearch);

    productSearch.$inject = [];

    function productSearch(){
      var ddo = {
        restrict: "A",
        templateUrl: "app/precio-justo/directives/product-search/precio-justo.product-search.html",
        scope: {
          onSearch: "&"
        },
        controller: "productSearchController",
        controllerAs: "vm",
        bindToController: true
      }
      return ddo;
    }
}());

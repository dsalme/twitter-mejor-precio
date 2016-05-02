(function() {
  'use strict';
    angular.module('precioJusto')
      .controller('precioJustoController', precioJustoController);

      precioJustoController.$inject = ['precioJustoService'];

      function precioJustoController(precioJustoService){
        var vm = this;

        vm.onSearch = onSearch;
        vm.searchedTweets = [];
        vm.query = "";
        function onSearch(query){
          vm.query = query;
          vm.searchedTweets = precioJustoService.getTweetList();
        }
      }
}());

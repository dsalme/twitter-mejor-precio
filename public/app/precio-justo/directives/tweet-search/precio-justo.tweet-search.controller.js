(function() {
  'use strict';
  angular.module('precioJusto')
    .controller('tweetSearchController', tweetSearchController);

    tweetSearchController.$inject = ['precioJustoService'];

    function tweetSearchController(precioJustoService){
      var vm = this;

      vm.searchTweets = searchTweets;

      function searchTweets(query){
        precioJustoService.searchTweets(query).then(function(){
            vm.onSearch({query: query});
        });
      }
    }
}());

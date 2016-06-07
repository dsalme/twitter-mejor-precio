(function() {
  'use strict';
  angular.module('precioJusto')
    .factory('precioJustoService', precioJustoService);

    precioJustoService.$inject = ['$q', '$http'];

    function precioJustoService($q, $http){
      var publicInterface = {
        getTweetList: getTweetList,
        searchedTweets: [],
        searchTweets: searchTweets
      }
      return publicInterface;

      function getTweetList(){
        return publicInterface.searchedTweets;
      }

      function searchTweets(query){
        var config = {
          url: "/precioJusto",
          method: "POST",
          data: {
            query: query
          }
        }
        return $http(config).then(function(response){
          console.log(response);

          if(response.data && response.data.statuses){
            publicInterface.searchedTweets = response.data.statuses;
          }
          return;
        });
      }
    }
}());

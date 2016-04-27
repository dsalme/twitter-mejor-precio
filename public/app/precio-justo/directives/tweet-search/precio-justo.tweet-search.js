(function() {
  'use strict';
    angular.module('precioJusto')
      .directive('tweetSearch', tweetSearch);

    tweetSearch.$inject = [];

    function tweetSearch(){
      var ddo = {
        restrict: "A",
        templateUrl: "app/precio-justo/directives/tweet-search/precio-justo.tweet-search.html",
        scope: {
          onSearch: "&"
        },
        controller: "tweetSearchController",
        controllerAs: "vm",
        bindToController: true
      }
      return ddo;
    }
}());

(function() {
  'use strict';
    angular.module('precioJusto')
      .controller('precioJustoController', precioJustoController);

      precioJustoController.$inject = ['precioJustoService', '$scope'];

      function precioJustoController(precioJustoService, $scope){
        var vm = this;

        vm.googleMapArgs = {
          width: '500px',
          height: '500px',
          allowMultipleMark:true
        }
        vm.onSearch = onSearch;
        vm.setPosition = setPosition;
        vm.searchedTweets = [];
        vm.query = "";
        vm.latitude = "";
        vm.longitude = "";
        function onSearch(query){
          vm.query = query;
          vm.searchedTweets = precioJustoService.getTweetList();
        }

        function setPosition(tweet){
          vm.googleMapArgs.latitude = tweet.geo.coordinates[0];
          vm.googleMapArgs.longitude = tweet.geo.coordinates[1];
          vm.googleMapArgs.text = tweet.text;
          $scope.$broadcast('newMapMarker', vm.googleMapArgs);
        }
      }
}());

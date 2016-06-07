(function() {
  'use strict';
  angular.module('precioJusto').service('geoLocationService', geoLocationService);

  geoLocationService.$inject = ['$window', '$q'];

  function geoLocationService($window, $q){
    var deferred = $q.defer()

    $window.initMap = function () {
      deferred.resolve()
    }

    return deferred.promise
  }
}());

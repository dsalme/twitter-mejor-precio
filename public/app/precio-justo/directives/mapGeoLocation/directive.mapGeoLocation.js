(function() {
  'use strict';
  angular.module('precioJusto').directive('googleMap', googleMap);

  googleMap.$inject = ['geoLocationService', '$window'];
  function googleMap(geoLocationService, $window) {
    return {
        restrict: 'EA',
        scope: {
            param: '='
        },
        template: '<div id="googlemaps" data-ng-style={"width":param.width,"height":param.height}>' +
                  '</div>',
        replace: true,
        controller: function ($scope, $element, $attrs, geoLocationService) {

          function initAttribute() {
              if (!angular.isDefined($scope.param)) {
                  $scope.param = {};
              }

              if (!angular.isDefined($scope.param.height)) {
                  $scope.param.height = '100%';
              }

              if (!angular.isDefined($scope.param.width)) {
                  $scope.param.width = '100%';
              }
              if (!angular.isDefined($scope.param.autoZoom)) {
                  $scope.param.autoZoom = true;
              }
              if (!angular.isDefined($scope.param.allowMultipleMark)) {
                  $scope.param.allowMultipleMark = true;
              }
              geoLocationService.then(mapConfig);
          }

          function mapConfig() {
              $scope.infoWindow = '';
              $scope.markers = [];

              $window.navigator.geolocation.getCurrentPosition(initMap, geoError);
          }

          function setMapMarker(map, position, title, content) {
              var marker;
              var markerOptions = {
                  position: position,
                  map: map,
                  title: title,
                  icon: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png'
              };

              marker = new google.maps.Marker(markerOptions);
              if ($scope.param.allowMultipleMark){
                $scope.markers.push(marker);
              }else{
                $scope.markers = marker;
              }

              google.maps.event.addListener(marker, 'click', function () {
                  // close window if not undefined
                  if (infoWindow !== void 0) {
                      infoWindow.close();
                  }
                  // create new window
                  var infoWindowOptions = {
                      content: content
                  };
                  infoWindow = new google.maps.InfoWindow(infoWindowOptions);
                  infoWindow.open($scope.map, marker);
              });
          }

          function initMap(pos) {
              if ($scope.map === void 0) {
                var latlng = new google.maps.LatLng(pos.coords.latitude,
                                                    pos.coords.longitude);
                  $scope.mapOptions = {
                      center: latlng,
                      zoom: 12,
                      mapTypeId: google.maps.MapTypeId.ROADMAP,
                      scrollwheel: $scope.param.autoZoom
                  };
                  $scope.map = new google.maps.Map($element[0], $scope.mapOptions);
              }
          }

          function geoError(error) {
             console.log(new Error('No se encontro la ubicación'));
          }

          initAttribute();

          $scope.$on('newMapMarker', function(event, things){
            console.log(things);
            setMapMarker($scope.map, new google.maps.LatLng(things.latitude, things.longitude), 'Lugar', 'content');
          })
        }
    };
  }
}());

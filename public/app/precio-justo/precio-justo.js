(function() {
  'use strict';
  angular.module('precioJusto', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/precioJusto");
    //
    // Now set up the states
    $stateProvider
      .state('precioJusto', {
        url: "/precioJusto",
        templateUrl: "app/precio-justo/precio-justo.html",
        controller: "precioJustoController",
        controllerAs: "vm"
      });
      // .state('state1.list', {
      //   url: "/list",
      //   templateUrl: "partials/state1.list.html",
      //   controller: function($scope) {
      //     $scope.items = ["A", "List", "Of", "Items"];
      //   }
      // })
      // .state('state2', {
      //   url: "/state2",
      //   templateUrl: "partials/state2.html"
      // })
      // .state('state2.list', {
      //   url: "/list",
      //   templateUrl: "partials/state2.list.html",
      //   controller: function($scope) {
      //     $scope.things = ["A", "Set", "Of", "Things"];
      //   }
      // });
    });
}());

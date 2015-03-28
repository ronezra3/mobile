var app = angular.module('app', ['ngRoute', 'firebase']);



app.config(['$routeProvider',
  function ($routeProvider) {
      $routeProvider.
        when('/global', {
            templateUrl: '/app/partials/global.html',
            controller: ''
        }).
        when('/local', {
            templateUrl: '/app/partials/local.html',
            controller: ''
        }).
        otherwise({
            redirectTo: ''
        });
  }]);
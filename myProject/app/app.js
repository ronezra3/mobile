var app = angular.module('app', ['ngRoute', 'firebase']);



app.config(['$routeProvider',
  function ($routeProvider) {
      $routeProvider.
        when('/phones', {
            templateUrl: 'partials/phone-list.html',
            controller: 'PhoneListCtrl'
        }).
        otherwise({
            redirectTo: '/phones'
        });
  }]);
app.controller("mainController", function ($scope, $firebaseObject, $firebaseArray) {

    $scope.firebaseArr = [];

    $scope.outputValue;
    $scope.inputValue;

    function init() {
        var ref = new Firebase('https://projectrono.firebaseio.com/data');

        $scope.firebaseArr = $firebaseArray(ref);
        //$scope.firebaseArr.$bindTo($scope, "data");
    }

    $scope.save = function () {

        var retObj = $scope.firebaseArr.$add($scope.inputValue);
        var xx;
    }
    angular.element(document).ready(function () {
        init();
    });


    
});
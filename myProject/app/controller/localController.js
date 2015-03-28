


app.controller("globalController", function ($scope, $firebaseObject, $firebaseArray) {

    $scope.firebaseArr = [];
    $scope.customeArr = [];
    $scope.outputValue;
    $scope.inputValue;
    var inputobj = {};
    function init() {
        var ref = new Firebase('https://projectrono.firebaseio.com/data');

        $scope.firebaseArr = $firebaseArray(ref);
        //$scope.customeArr = $scope.firebaseArr
        //$scope.firebaseArr.$bindTo($scope, "data");
    }
    $scope.removeItem = function (prmIndex) {
        
        $scope.firebaseArr.$remove(prmIndex);
    }
    $scope.save = function () {
        inputobj.value = $scope.inputValue;
        $scope.firebaseArr.$add(inputobj);
        $scope.inputValue = '';
        //$scope.customeArr = $scope.firebaseArr
    }

    $scope.clearFirebaseArr = function () {

        for (var i = 0; i < $scope.firebaseArr.length; i++) {
            var retObj = $scope.firebaseArr.$remove(i);
            var xx;
        }
        
    }
    angular.element(document).ready(function () {
        init();
    });


    
});
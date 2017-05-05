var app = angular.module('jopdesAdd', ['toastr','angularjs-dropdown-multiselect']);
app.controller('jopdesAddCtrl', function($scope,$state,toastr){

    $scope.words = [];
    $scope.stringSettings = {template : '{{option}}', smartButtonTextConverter(skip, option) { return option; }};
    $scope.workOptions=['123','321']
});






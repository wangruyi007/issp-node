var app = angular.module('personAdd', ['toastr','angularjs-dropdown-multiselect']);
app.controller('personAddCtrl', function($scope,$state,toastr){

    $scope.words = [];
    $scope.stringSettings = {template : '{{option}}', smartButtonTextConverter(skip, option) { return option; }};
    $scope.workOptions=['123','321']
});






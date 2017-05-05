var app = angular.module('jopdetailAdd', ['toastr','angularjs-dropdown-multiselect']);
app.controller('jopdetailAddCtrl', function($scope,$state,toastr){

    $scope.words = [];
    $scope.stringSettings = {template : '{{option}}', smartButtonTextConverter(skip, option) { return option; }};
    $scope.workOptions=['123','321']
});






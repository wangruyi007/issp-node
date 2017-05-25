var app = angular.module('emailPerson', ['toastr','angularjs-dropdown-multiselect']);
app.controller('emailPersonCtrl', function($scope, emailSer,toastr){
    $scope.words = [];
    $scope.stringSettings = {template : '{{option}}', smartButtonTextConverter(skip, option) { return option; }};
    //获取公司
    emailSer.getPersonNames().then(function(response){
        if(response.data.code == 0){
            $scope.workOptions = response.data.data;
        }
    });
    $scope.getSummary ={onSelectionChanged(){
        emailSer.ectSummaryPerson($scope.words).then(function(response){
            if(response.data.code == 0){
                $scope.summaryLists = response.data.data;
            }
        })
    }}
});






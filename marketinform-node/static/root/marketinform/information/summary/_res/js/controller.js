var app = angular.module('informationSummary', ['toastr','angularjs-dropdown-multiselect']);
app.controller('informationSummaryCtrl', function($scope, informationSer,toastr){
    $scope.areas = [];
    $scope.stringSettings = {template : '{{option}}', smartButtonTextConverter(skip, option) { return option; }};
    //获取公司
    informationSer.listSummaryArea().then(function(response){
        if(response.data.code == 0){
            $scope.workOptions = response.data.data;
        }
    });
    $scope.getSummary ={onSelectionChanged(){
        informationSer.summaryInformation($scope.areas).then(function(response){
            if(response.data.code == 0){
                $scope.settlementSummarys = response.data.data;
            }
        })
    }}
});






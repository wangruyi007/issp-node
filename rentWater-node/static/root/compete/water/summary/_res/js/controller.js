var app = angular.module('waterSummary', ['toastr','angularjs-dropdown-multiselect']);
app.controller('waterSummaryCtrl', function($scope, waterSer,toastr){
    $scope.names = [];
    $scope.stringSettings = {template : '{{option}}', smartButtonTextConverter(skip, option) { return option; }};
    // 获取项目名称
    waterSer.waterName().then(function(response){
        if(response.data.code == 0){
            $scope.workOptions = response.data.data;
        }else{
                toastr.error(response.data.msg,'温馨提示');
            }
    });
    $scope.getSummary ={onSelectionChanged(){

        console.log($scope.names)
        waterSer.waterSummary($scope.names).then(function(response){
            console.log(response)
            if(response.data.code == 0){
                $scope.waterLists = response.data.data;
            }else {
                toastr.error(response.data.msg,'温馨提示')
            }
        })
    }}
});

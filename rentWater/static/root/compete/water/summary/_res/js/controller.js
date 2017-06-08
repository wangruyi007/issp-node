
var app = angular.module('waterSummary', ['toastr']);
app.controller('waterSummaryCtrl', function($scope, waterSer,toastr){

    $scope.showed=true;
    // 获取项目名称
    waterSer.waterName().then(function(response){
        if(response.data.code == 0){
            $scope.area = response.data.data;
        }else{
                toastr.error(response.data.msg,'温馨提示');
            }
    });
    $scope.collect = function(){
        var data = $scope;
        data.sum={
            names:data.name
        };
        waterSer.waterSummary(data.sum).then(function(response){
            if(response.data.code == 0){
                $scope.waterLists = response.data.data;
            }else{
                toastr.error(response.data.msg,'温馨提示');
            }
        })
    };

});
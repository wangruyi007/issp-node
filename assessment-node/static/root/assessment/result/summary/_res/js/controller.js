/**
 * Created by ike on 2017/4/17.
 */
var app = angular.module('resultSummary', ['toastr']);
app.controller('resultSummaryCtrl', function($scope, resultSer,toastr){
    //获取项目
    resultSer.listResultProjects().then(function(response){
        if(response.data.code == 0){
            $scope.prodata = response.data.data;
        }
    });
    //查询所有地区
    resultSer.listResultArea().then(function(response){
        console.log(response)
        if(response.data.code == 0){
            $scope.areadata = response.data.data;
        }
    });
        $scope.myFunc = function () {
            var listData = {
                proData: $scope.project,
                proArea: $scope.area
            };
            resultSer.ectSummary(listData).then(function (response) {
                if (response.data.code == 0) {
                    $scope.summaryLists = response.data.data;
                } else if (response.data.code == 403) {
                    toastr.error("请登录用户", '温馨提示');
                }
            });
        };
});






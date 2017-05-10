/**
 * Created by ike on 2017/4/13.
 */
var app = angular.module('area', ['ng-pagination','toastr']);
app.controller('areaCtrl',function($scope,currencySer,toastr) {//areaLists
    $scope.areaList = {};
    $scope.collectFun = function(){
        $scope.start = angular.element(".startTime").val();//开始时间
        $scope.end = angular.element(".endTime").val();//结束时间
        var areaData = {
            start:$scope.start || "",
            end:$scope.end || "",
            area:$scope.area || "",
            project:$scope.project || "",
            type:$scope.type || "",
            name:$scope.name || ""
        }
        currencySer.areaList(areaData).then(function(response){
            if(response.data.code==0){
                $scope.data = response.data.data;
            }
        });
    }
    
});

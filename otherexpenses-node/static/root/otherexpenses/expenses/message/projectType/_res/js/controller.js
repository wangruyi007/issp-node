/**
 * Created by ike on 2017/4/13.
 */
var app = angular.module('projectType', ['ng-pagination','toastr']);
app.controller('projectTypeCtrl',function($scope,currencySer,toastr) {//projectTypeLists
    $scope.projectTypeList = {};
    $scope.collectFun = function(){
        $scope.start = angular.element(".startTime").val();//开始时间
        $scope.end = angular.element(".endTime").val();//结束时间
        var projectTypeData = {
            start:$scope.start || "",
            end:$scope.end || "",
            area:$scope.area || "",
            project:$scope.project || "",
            type:$scope.type || "",
            name:$scope.name || ""
        }
        currencySer.projectType(projectTypeData).then(function(response){
            if(response.data.code==0){
                $scope.data = response.data.data;
            }
        });
    }
    
});

/**
 * Created by ike on 2017/4/13.
 */
var app = angular.module('collectApp', ['toastr']);
app.controller('collectCtrl',function($scope,mainfeeSer,toastr) {
    //所有名称
    mainfeeSer.aPayfeer().then(function(response){
         if(response.data.code==0){
            $scope.allpays = response.data.data;
         }else{
             toastr.error('汇总失败','温馨提示')
        }
    })
    //所有名字
    mainfeeSer.allname().then(function(response){
         if(response.data.code==0){
            $scope.allnames = response.data.data;
         }else{
             toastr.error('汇总失败','温馨提示')
        }
    })
    
    $scope.collectFun = function(){
        $scope.isCollect = true;
        if($scope.company){
            $scope.isPay = true;
        }else{
            $scope.isPay = false;
        }
        $scope.startTime = angular.element('.start').val();//开始日期
        $scope.endTime = angular.element('.end').val();//结束日期
        var collectData = {
            startTime:$scope.startTime || "",
            endTime:$scope.endTime || "",
            payFeer:$scope.company || "",
            empName:$scope.people || ""
        }
        mainfeeSer.collectList(collectData).then(function(response){
            if(response.data.code==0){
                $scope.lists = response.data.data;
            }else{
                toastr.error('汇总失败','温馨提示')
            }
        });
    }
    
});

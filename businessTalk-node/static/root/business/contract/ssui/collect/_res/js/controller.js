/**
 * Created by ike on 2017/4/17.
 */
var app = angular.module('ssuiCollect', ['toastr']);
app.controller('ssuiCollectCtrl', function($scope, ssuiSer,$state,toastr){
    $scope.data = [];
    $scope.teamInfo = [];
    //汇总
    $scope.collectFun = function(){
        $scope.data.contractInProject = $scope.project;
        $scope.data.startTime = angular.element('.startTime').val();//洽谈时间
        $scope.data.endTime = angular.element('.endTime').val();//洽谈时间
        var data = $scope.data;
        ssuiSer.ssuiCollect(data).then(function(response){
            if(response.data.code == 0){
                $scope.data = response.data.data;
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }
        });
    };
});





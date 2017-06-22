var app = angular.module('packageCollect', ['toastr','ipCookie']);
app.controller('subpackageCollectCtrl', function($scope, subpackageSer,$state,toastr,ipCookie,$location){
    $scope.data = [];
    $scope.teamInfo = [];
    // 获取内部项目名称
    subpackageSer.outProjects().then(function(response){
        if(response.data.code == 0){
            $scope.projects = response.data.data;
        }else{
                toastr.error(response.data.msg,'温馨提示');
            }
    });
    //汇总
    $scope.collectFun = function(){
        var obj = {};
        // obj.contractInProject = $scope.project;
        obj.contractInProject = angular.element('.pro').val();//内部项目名称
        obj.startTime = angular.element('.startTime').val();//洽谈时间
        obj.endTime = angular.element('.endTime').val();//洽谈时间
        subpackageSer.ssuiCollect(obj).then(function(response){
            if(response.data.code == 0){
                $scope.data = response.data.data;
                $scope.length = $scope.data.length;
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
});





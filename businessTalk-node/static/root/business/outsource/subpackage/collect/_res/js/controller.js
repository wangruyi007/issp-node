var app = angular.module('packageCollect', ['toastr','ipCookie']);
app.controller('subpackageCollectCtrl', function($scope, subpackageSer,$state,toastr,ipCookie,$location){
    $scope.data = [];
    $scope.teamInfo = [];
    //汇总
    $scope.collectFun = function(){
        $scope.data.contractInProject = $scope.project;
        $scope.data.startTime = angular.element('.startTime').val();//洽谈时间
        $scope.data.endTime = angular.element('.endTime').val();//洽谈时间
        var data = $scope.data;
        subpackageSer.ssuiCollect(data).then(function(response){
            if(response.data.code == 0){
                $scope.data = response.data.data;
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
});





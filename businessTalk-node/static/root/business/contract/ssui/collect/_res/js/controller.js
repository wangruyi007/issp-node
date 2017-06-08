var app = angular.module('ssuiCollect', ['toastr']);
app.controller('ssuiCollectCtrl', function($scope, ssuiSer,$state,toastr){
    $scope.data = [];
    $scope.teamInfo = [];
    //汇总
    $scope.collectFun = function(){
        var obj = {};
        obj.contractInProject = $scope.project;
        obj.startTime = angular.element('.startTime').val();//洽谈时间
        obj.endTime = angular.element('.endTime').val();//洽谈时间
        ssuiSer.ssuiCollect(obj).then(function(response){
            if(response.data.code == 0){
                $scope.data = response.data.data;
                $scope.length = $scope.data.length;
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
});





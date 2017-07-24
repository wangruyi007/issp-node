var app = angular.module('ssuiCollect', ['toastr']);
app.controller('ssuiCollectCtrl', function($scope, ssuiSer,$state,toastr){
    $scope.data = [];
    $scope.teamInfo = [];
	// 获取内部项目名称
    ssuiSer.ssuiProjects().then(function(response){
        if(response.data.code == 0){
            $scope.projects = response.data.data;
        }else{
                toastr.error(response.data.msg,'温馨提示');
            }
    });
    //汇总
    $scope.collectFun = function(){
        var obj = {};
        //obj.contractInProject = $scope.project;
		obj.contractInProject = angular.element('.pro').val();//内部项目名称
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





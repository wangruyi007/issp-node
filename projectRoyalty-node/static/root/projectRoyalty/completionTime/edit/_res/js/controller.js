var app = angular.module('timeEdit', ['toastr']);
app.controller('timeEditCtrl', function($scope, timeSer,$stateParams,$state,toastr){
    var timeData ={id: $stateParams.id};
    //获取ID
    timeSer.findTimeId(timeData).then(function(response){
        if(response.data.code==0){
            $scope.editTimes = response.data.data;
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    //编辑点击提交
    $scope.timeEditFun = function(){
        timeSer.editTime($scope.editTimes).then(function(response){
            if(response.data.code == 0){
                $state.go('root.projectRoyalty.completionTime.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});






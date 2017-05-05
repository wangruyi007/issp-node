var app = angular.module('angleEdit', ['toastr']);
app.controller('angleEditCtrl', function($scope,$state,toastr,$stateParams,angleSer){

    var angleData ={id: $stateParams.id};
    angleSer.getAngle(angleData).then(function(response){
        if(response.data.code == 0){
            $scope.editAngle = response.data.data
        }
    });

    //提交编辑
    $scope.angleEditFun = function(){
        var vm = $scope;
        angleSer.editAngle(vm.editAngle).then(function(response){
            if(response.data.code == 0){
                $state.go('root.organize.management.angle.list');
                toastr.success( "已成功编辑", '温馨提示');
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }
        });
    };
});






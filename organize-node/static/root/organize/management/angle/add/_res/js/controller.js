var app = angular.module('angleAdd', ['toastr']);
app.controller('angleAddCtrl', function($scope,angleSer,$state,toastr){

    $scope.angleAddFun = function(){
        var vm = $scope;
        angleSer.addAngle(vm.Add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.organize.management.angle.list');
                toastr.success("已成功添加", '温馨提示');
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }
        });
    };
});






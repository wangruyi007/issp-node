var app = angular.module('reflectAdd', ['toastr']);
app.controller('reflectAddCtrl', function($scope,$state,toastr,reflectSer){
    $scope.reflectAddFun = function(){
        var vm = $scope;
        reflectSer.addReflect(vm.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.organize.management.reflect.list');
                toastr.success( "已成功添加", '温馨提示');
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }
        });

    };
});






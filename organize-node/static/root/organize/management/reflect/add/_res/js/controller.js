var app = angular.module('reflectAdd', ['toastr','ipCookie']);
app.controller('reflectAddCtrl', function($scope,$state,toastr,reflectSer){
    $scope.add={};
    reflectSer.getClassify().then(function(response){
        if(response.data.code==0){
            $scope.classifys = response.data.data;
            $scope.add.classifyId = $scope.classifys[0].id
        }
    });
    $scope.reflectAddFun = function(){
        var vm = $scope;
        reflectSer.addReflect(vm.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.organize.management.reflect.list');
                toastr.success( "已成功添加", '温馨提示');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
});

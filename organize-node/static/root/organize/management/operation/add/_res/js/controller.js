var app = angular.module('operationAdd', ['toastr']);
app.controller('operationAddCtrl', function($scope,$state,toastr,operationSer){

    $scope.operationAddFun = function(){
        var vm = $scope;
        operationSer.addOperation(vm.operation).then(function(response){
            if(response.data.code == 0){
                $state.go('root.organize.management.operation.list');
                toastr.success("已成功添加", '温馨提示');
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }
        });
    };
});






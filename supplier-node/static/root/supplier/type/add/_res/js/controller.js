var app = angular.module('typeAdd', ['toastr','ipCookie']);
app.controller('typeAddCtrl', function($scope, typeSer,$state,toastr,ipCookie,$location){
    $scope.typeAddFun = function(){
        var vm = $scope;
        typeSer.addType(vm.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.supplier.type.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else {
                toastr.error(  response.data.msg, '温馨提示');
            }
        });

    };
});






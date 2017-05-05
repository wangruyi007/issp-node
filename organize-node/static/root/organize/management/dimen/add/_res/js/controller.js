var app = angular.module('dimenAdd', ['toastr']);
app.controller('dimenAddCtrl', function($scope,$state,toastr,dimensionSer){

    $scope.dimensionAddFun = function(){
        var vm = $scope;
        dimensionSer.addDimension(vm.dimension).then(function(response){
            if(response.data.code == 0){
                $state.go('root.organize.management.dimen.list');
                toastr.success("已成功添加", '温馨提示');
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }
        });
    };
});






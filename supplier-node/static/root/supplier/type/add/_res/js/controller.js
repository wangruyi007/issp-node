/**
 * Created by ike on 2017/4/17.
 */
var app = angular.module('typeAdd', ['toastr']);
app.controller('typeAddCtrl', function($scope, typeSer,$state,toastr){
    $scope.typeAddFun = function(){
        var vm = $scope;
        typeSer.addType(vm.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.supplier.type.list');
                toastr.success("已成功添加", '温馨提示');
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }
        });

    };
});






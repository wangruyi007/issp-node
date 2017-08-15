var app = angular.module('amountAdd', ['toastr']);
app.controller('amountAddCtrl', function($scope, amountSer,$state,toastr){
    //添加
    $scope.amountAddFun = function(){
        var vm = $scope;
        amountSer.addAmount(vm.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.projectRoyalty.contractAmount.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});





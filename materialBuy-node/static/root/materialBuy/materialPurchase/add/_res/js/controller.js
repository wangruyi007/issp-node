var app = angular.module('purchaseAddM', ['toastr']);
app.controller('purchaseAddCtrl', function($scope, purchaseSer,$state,toastr){
    //添加
    $scope.purchaseAddFun = function(){
        var vm = $scope;
        vm.purchase.subscribeDate = angular.element('.subscribeDate').val();
        purchaseSer.addPurchase(vm.purchase).then(function(response){
            if(response.data.code == 0){
                $state.go('root.materialBuy.materialPurchase.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});





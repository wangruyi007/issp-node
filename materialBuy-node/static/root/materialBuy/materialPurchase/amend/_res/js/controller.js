var app = angular.module('purchaseEdit', ['toastr']);
app.controller('purchaseEditCtrl', function($scope, purchaseSer,$stateParams,$state,toastr){
    var discussData ={id: $stateParams.id};
    //获取ID
    purchaseSer.findPurchaseId(discussData).then(function(response){
        console.log(response);
        if(response.data.code==0){
            $scope.editPurchase = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }

    });
    //编辑点击提交
    $scope.purchaseEditFun = function(){
        var vm = $scope;
        vm.editPurchase.subscribeDate = angular.element('.subscribeDate').val();
        vm.editPurchase.planBorrowTime = angular.element('.planBorrowTime').val();
        purchaseSer.editPurchaseW(vm.editPurchase).then(function(response){
            if(response.data.code == 0){
                $state.go('root.materialBuy.materialPurchase.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});






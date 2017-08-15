var app = angular.module('amountEdit', ['toastr']);
app.controller('amountEditCtrl', function($scope, amountSer,$stateParams,$state,toastr){
    var amountData ={id: $stateParams.id};
    //获取ID
    amountSer.findAmountId(amountData).then(function(response){
        if(response.data.code==0){
            $scope.editAmounts = response.data.data;
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    //编辑点击提交
    $scope.amountEditFun = function(){
        amountSer.editAmount($scope.editAmounts).then(function(response){
            if(response.data.code == 0){
                $state.go('root.projectRoyalty.contractAmount.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});






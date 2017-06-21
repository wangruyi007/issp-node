var app = angular.module('settlementAdd', ['toastr']);
app.controller('settlementAddCtrl', function($scope, settlementSer,$state,toastr){
    //添加公司能力
    $scope.settlementAddFun = function(){
        var vm = $scope;
        $scope.add.signAuditTime=angular.element('.signAuditTime').val();
        $scope.add.eRPAuditTime=angular.element('.eRPAuditTime').val();
        $scope.add.billAuditTime=angular.element('.billAuditTime').val();
        $scope.add.budgetAuditTime=angular.element('.budgetAuditTime').val();
        $scope.add.receiveMoneyTime=angular.element('.receiveMoneyTime').val();
        settlementSer.addSettlement(vm.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.project.settlement.list');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});






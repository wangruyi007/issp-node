var app = angular.module('settlementEdit', ['toastr']);
app.controller('settlementEditCtrl', function($scope, settlementSer,$state,toastr,$stateParams){
    var settlementId = {id : $stateParams.id};
    //获取值
    settlementSer.getSettlementById(settlementId).then(function(response){
        if(response.data.code==0){
            $scope.editInfo = response.data.data;
        }else if(response.data.code==1){
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    $scope. settlementProjectEditFun = function(){
        var vm = $scope;
        $scope.editInfo.signAuditTime=angular.element('.signAuditTime').val();
        $scope.editInfo.eRPAuditTime=angular.element('.eRPAuditTime').val();
        $scope.editInfo.billAuditTime=angular.element('.billAuditTime').val();
        $scope.editInfo.budgetAuditTime=angular.element('.budgetAuditTime').val();
        $scope.editInfo.receiveMoneyTime=angular.element('.receiveMoneyTime').val();
        settlementSer.editSettlement(vm.editInfo).then(function(response){
            if(response.data.code == 0){
                $state.go('root.project.settlement.list');
                toastr.success( "已成功编辑", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});
/**
 * Created by ike on 2017/4/18.
 */
var app = angular.module('settlementEdit', ['toastr']);
app.controller('settlementEditCtrl', function($scope, settlementSer,$state,toastr,$stateParams,ipCookie,$location){
    var settlementId = {id : $stateParams.id};
    //获取值
    settlementSer.getSettlementById(settlementId).then(function(response){
        if(response.data.code==0){
            $scope.editInfo = response.data.data;
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
            }else if(response.data.code==403||response.data.code==401){
                toastr.error( "请登录用户,2秒后跳至登陆页面", '温馨提示');
                var absurl = $location.absUrl();
                ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes',domain:'issp.bjike.com'});
                setTimeout(function(){
                    window.location.href='http://localhost/login'
                },2000)
            }
        });
    };
});
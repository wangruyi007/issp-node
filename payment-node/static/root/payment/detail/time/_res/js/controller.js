var app = angular.module('time', ['toastr']);
app.controller('timeCtrl', function($scope, detailSer,$stateParams,$state,toastr){
    var basicData ={id: $stateParams.id};
    //获取ID
    detailSer.findDetailId(basicData).then(function(response){
        if(response.data.code=='0'){
            $scope.settleInfo = response.data.data;
        }else{
            toastr.error(response.data.msg,'温馨提示')
        }
    });


    $scope.settlementEditFun = function(){
        var vm = $scope;
    vm.settleInfo.finishTime=angular.element('.finishTime').val();
    vm.settleInfo.checkTime=angular.element('.checkTime').val();
    vm.settleInfo.auditTime=angular.element('.auditTime').val();
    vm.settleInfo.countTime=angular.element('.countTime').val();
    vm.settleInfo.billTime=angular.element('.billTime').val();
    vm.settleInfo.planTime=angular.element('.planTime').val();
        detailSer.allAuditTime(vm.settleInfo).then(function(response){
            if(response.data.code == 0){
                $scope.listNames = response.data.data;
                $state.go('root.payment.detail.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };

});






var app = angular.module('voucherAuditReview', ['toastr']);
app.controller('reviewCtrl',function($scope,auditSer,toastr,$stateParams,$state){
    //审核
    $scope.delYes = function(){
        var data = {
            id :$stateParams.id
        };

        auditSer.auditVoucher(data).then(function(response){
            if(response.data.code==0){
                toastr.info( "信息已审核", '温馨提示');
                $state.go('root.recordAccount.voucherAudit.list');
                $scope.verifyId = $stateParams.id;
                //向父Ctrl传递事件
                $scope.$emit('reviewId', $scope.verifyId);
                $scope.$emit('changeId', null);
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        })
    }


});



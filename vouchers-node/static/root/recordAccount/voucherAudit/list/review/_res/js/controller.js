var app = angular.module('voucherAuditReview', ['toastr','ipCookie']);
app.controller('reviewCtrl',function($scope,auditSer,toastr,$stateParams,$state,$location,ipCookie){
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
            }else if(response.data.code==403||response.data.code==401){
                toastr.error( "请登录用户,3秒后跳至登陆页面", '温馨提示');
                var absurl = $location.absUrl();
                ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes' });
                setTimeout(function(){
                    window.location.href='http://localhost/login'
                },3000)
            }
        })
    }


});



var app = angular.module('signingReview', ['toastr','ipCookie']);
app.controller('signingReviewCtrl', function($scope, signingSer,$stateParams,$state,toastr,$location,ipCookie){
    var auditData ={id: $stateParams.id};

    //获取ID
    signingSer.findSigningId(auditData).then(function(response){
        if(response.data.code== 0){
            $scope.checkId = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }

    });

    //审核
    $scope.signingAuditFun = function(){
        var vm = $scope;
        signingSer.reviewSigning(vm.checkId).then(function(response){
            if(response.data.code == 0){
                $state.go('root.businessContract.signingProject.list');
                toastr.success("已成功审核", '温馨提示');
            }else if(response.data.code==403||response.data.code==401){
                toastr.error( "请登录用户,3秒后跳至登陆页面", '温馨提示');
                var absurl = $location.absUrl();
                ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes',domain:'issp.bjike.com' });
                setTimeout(function(){
                    window.location.href='http://localhost/login'
                },3000)
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});





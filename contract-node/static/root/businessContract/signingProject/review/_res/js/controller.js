var app = angular.module('signingReview', ['toastr']);
app.controller('signingReviewCtrl', function($scope, signingSer,$stateParams,$state,toastr){
    var auditData ={id: $stateParams.id};

    //获取ID
    signingSer.findSigningId(auditData).then(function(response){
        if(response.data.code== 0){
            $scope.auditId = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }

    });

    //审核
    $scope.signingAuditFun = function(){
        var vm = $scope;
        var data = {
            id:vm.auditId.id,
           auditAdvice: vm.auditId.auditAdvice
        };

        signingSer.reviewSigning(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.businessContract.signingProject.list');
                toastr.success("已成功审核", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});





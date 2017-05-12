var app = angular.module('signingReview', ['toastr']);
app.controller('signingReviewCtrl', function($scope, signingSer,$stateParams,$state,toastr){
    var auditData ={id: $stateParams.id};

    //获取ID
    signingSer.findSigningId(auditData).then(function(response){
        if(response.data.code=='0'){
            $scope.check = response.data.data;
        }else if (response.data.code==403){
            toastr.error( "请登录用户", '温馨提示');
        }

    });

    //审核
    $scope.signingAuditFun = function(){
        var vm = $scope;
        signingSer.reviewSigning(vm.check).then(function(response){
            if(response.data.code == 0){
                $state.go('root.businessContract.signingProject.list');
                toastr.success("已成功审核", '温馨提示');
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }
        });

    };

});





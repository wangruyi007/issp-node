var app = angular.module('quotaEdit', ['toastr']);
app.controller('quotaEditCtrl', function($scope, quotaSer,$stateParams,$state,toastr){
    var targetData ={id: $stateParams.id};
    //获取ID
    quotaSer.findQuotaId(targetData).then(function(response){
        if(response.data.code==0){
            $scope.editQuotas = response.data.data;
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    //获取实际权重
    quotaSer.getQuotaWeightAllocation().then(function (response) {
        if(response.data.code==0){
            $scope.getQuotaWeightAllocations = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    //编辑点击提交
    $scope.quotaEditFun = function(){
        quotaSer.editQuota($scope.editQuotas).then(function(response){
            if(response.data.code == 0){
                $state.go('root.projectRoyalty.actualQuota.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});






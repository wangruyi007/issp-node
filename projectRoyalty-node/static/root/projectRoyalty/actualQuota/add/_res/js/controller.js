var app = angular.module('quotaAdd', ['toastr']);
app.controller('quotaAddCtrl', function($scope, quotaSer,$state,toastr){
    //获取实际权重
    quotaSer.getQuotaWeightAllocation().then(function (response) {
        if(response.data.code==0){
            $scope.getQuotaWeightAllocations = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });

    //添加
    $scope.quotaAddFun = function(){
        var vm = $scope;
        quotaSer.addQuota(vm.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.projectRoyalty.actualQuota.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});





var app = angular.module('rewardEdit', ['toastr','ipCookie']);
app.controller('rewardEditCtrl', function($scope, basicinfoSer,$state,toastr,$stateParams,ipCookie,$location){
    var rewardId2 = {id : $stateParams.subId};
    //获取值
    basicinfoSer.editRewardById(rewardId2).then(function(response){
        if(response.data.code==0){
            $scope.editInfo = response.data.data;
        }else if(response.data.code==1){
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    $scope.rewardEditFun = function(){
        var vm = $scope;
        vm.editInfo.acquisition = angular.element('.acquisition').val();
        basicinfoSer.editRewardBasic(vm.editInfo).then(function(response){
            if(response.data.code == 0){
                $state.go('root.supplier.basicinfo.list[12]');
                toastr.success( "已成功编辑", '温馨提示');
            }else {
                toastr.error(response.data.msg,'温馨提示')
            }
        });
    };
});
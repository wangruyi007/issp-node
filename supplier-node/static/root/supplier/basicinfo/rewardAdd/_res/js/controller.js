var app = angular.module('rewardAdd', ['toastr','ipCookie']);
app.controller('rewardAddCtrl', function($scope, basicinfoSer,$state,toastr,$stateParams,ipCookie,$location){
    var rewardId = {id : $stateParams.id};
    //获取值
    basicinfoSer.editBasicInfoById(rewardId).then(function(response){
        if(response.data.code==0){
            $scope.peditInfo = response.data.data;
        }
    });
    //添加
    $scope.rewardAddFun= function(){
        var vm = $scope;
        vm.peditInfo.acquisition = angular.element('.acquisition').val();
        basicinfoSer.rewardBasicAdd(vm.peditInfo).then(function(response){
            if(response.data.code == 0){
                $state.go('root.supplier.basicinfo.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
});





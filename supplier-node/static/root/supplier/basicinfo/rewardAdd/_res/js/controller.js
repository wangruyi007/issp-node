var app = angular.module('rewardAdd', ['toastr']);
app.controller('rewardAddCtrl', function($scope, basicinfoSer,$state,toastr,$stateParams){
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
        var data = {
            id:vm.peditInfo.id,
            informationId:vm.peditInfo.informationId,
            name: vm.peditInfo.name2,
            acquisition: vm.peditInfo.acquisition2,
        };
        basicinfoSer.rewardBasicAdd(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.supplier.basicinfo.list');
                toastr.success("已成功添加", '温馨提示');
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }
        });
    };
});





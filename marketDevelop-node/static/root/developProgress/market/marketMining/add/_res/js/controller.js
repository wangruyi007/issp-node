var app = angular.module('marketMiningAdd', ['toastr']);
app.controller('marketMiningAddCtrl', function($scope, marketMiningSer,$state,toastr){
    //获取业务类型
    marketMiningSer.getType().then(function(response){
        if(response.data.code==0){
            $scope.types = response.data.data;
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    //添加提交
    $scope.MiningAddFun = function(){
        var vm = $scope;
        marketMiningSer.channelAdd(vm.mining).then(function(response){
            console.log(response);
            if(response.data.code == 0){
                $state.go('root.developProgress.market.marketMining.list');
                toastr.success("已成功添加", '温馨提示');
            }else {
                toastr.error(response.data.msg,'温馨提示')
            }
        });

    };

});





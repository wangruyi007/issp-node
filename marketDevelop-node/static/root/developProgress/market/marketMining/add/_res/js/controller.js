var app = angular.module('marketMiningAdd', ['toastr']);
app.controller('marketMiningAddCtrl', function($scope, marketMiningSer,$state,toastr){

    //年计划添加
    $scope.MiningAddFun = function(){
        var vm = $scope;
        marketMiningSer.channelAdd(vm.mining).then(function(response){
            if(response.data.code == 0){
                $state.go('root.developProgress.market.marketMining.list');
                toastr.success("已成功添加", '温馨提示');
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }
        });

    };

});





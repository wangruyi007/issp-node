var app = angular.module('marketMiningEdit', ['toastr']);
app.controller('marketMiningEditCtrl', function($scope, marketMiningSer,$stateParams,$state,toastr){
    var channelData ={channelId: $stateParams.id};

    //获取ID
    marketMiningSer.findChannelId(channelData).then(function(response){
        if(response.data.code == 0){
            $scope.editchannel= response.data.data;
        }else {
            toastr.error(response.data.msg,'温馨提示')
        }

    });

    //获取业务类型
    marketMiningSer.getType().then(function(response){
        if(response.data.code==0){
            $scope.types = response.data.data;
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    //编辑点击提交
    $scope.MiningEditFun = function(){
        var vm = $scope;
        marketMiningSer.channelEdit(vm.editchannel).then(function(response){
            if(response.data.code == 0){
                $state.go('root.developProgress.market.marketMining.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else {
                toastr.error(response.data.msg,'温馨提示')
            }
        });

    };
});






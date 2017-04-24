var app = angular.module('marketMiningEdit', ['toastr']);
app.controller('marketMiningEditCtrl', function($scope, marketMiningSer,$stateParams,$state,toastr){
    var channelData ={channelId: $stateParams.id};

    //获取ID
    marketMiningSer.findChannelId(channelData).then(function(response){
        if(response.data.code=='0'){
            $scope.editchannel= response.data.data;
        }else if (response.data.code==403){
            toastr.error( "请登录用户", '温馨提示');
        }

    });


    //编辑点击提交
    $scope.MiningEditFun = function(){

        var vm = $scope;
        var data = {
            id:vm.editchannel.id,
            type : vm.editchannel.type,
            course : vm.editchannel.course,
            staff : vm.editchannel.staff,
            qualification : vm.editchannel.qualification,
            other : vm.editchannel.other,
            remark : vm.editchannel.remark
        };
        console.log(data);
        marketMiningSer.channelEdit(data).then(function(response){
            console.log(response);
            if(response.data.code == 0){
                $state.go('root.developProgress.market.marketMining.list');
                toastr.success( "编辑成功", '温馨提示');
            }else if(response.data.code == 403){
                toastr.error( "请登录用户", '温馨提示');
            }
        });

    };
});






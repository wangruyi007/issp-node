var app = angular.module('marketMiningAdd', ['toastr']);
app.controller('marketMiningAddCtrl', function($scope, marketMiningSer,$state,toastr){

    //年计划添加
    $scope.MiningAddFun = function(){
        var vm = $scope;
        var data = {
            type : vm.addType,
            course : vm.addCourse,
            staff : vm.addStaff,
            qualification : vm.addQualification,
            other : vm.addOther,
            remark : vm.addRemark
        };
        marketMiningSer.channelAdd(data).then(function(response){
                console.log(response);
            if(response.data.code == 0){
                $state.go('root.developProgress.market.marketMining.list');
                toastr.success("已成功添加", '温馨提示');
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }
        });

    };

});





var app = angular.module('increCompletion', ['toastr']);
app.controller('increCompletionCtrl', function($scope, increAgoSer,$stateParams,$state,toastr){
    var webData ={id: $stateParams.id};

    //获取ID
    increAgoSer.increAgoId(webData).then(function(response){
        if(response.data.code==0){
            $scope.incre = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }

    });

    //编辑点击提交
    $scope.webEditFun = function(){
        var vm = $scope;
        vm.incre.addTime = angular.element('.addTime').val();
        increAgoSer.increComplete(vm.incre).then(function(response){
            if(response.data.code == 0){
                $state.go('root.insurance.increaseAgo.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});






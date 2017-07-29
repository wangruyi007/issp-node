var app = angular.module('reduAgoEdit', ['toastr']);
app.controller('reduAgoEditCtrl', function($scope, reduAgoSer,$stateParams,$state,toastr){
    var webData ={id: $stateParams.id};

    //获取ID
    reduAgoSer.reduAgoId(webData).then(function(response){
        if(response.data.code==0){
            $scope.reduAgo = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }

    });

    //编辑点击提交
    $scope.reduAgoEditFun = function(){
        var vm = $scope;
        reduAgoSer.reduAgoEdit(vm.reduAgo).then(function(response){
            if(response.data.code == 0){
                $state.go('root.insurance.reducingAgo.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});






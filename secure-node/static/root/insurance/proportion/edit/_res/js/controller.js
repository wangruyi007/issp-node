var app = angular.module('protionEdit', ['toastr']);
app.controller('protionEditCtrl', function($scope, protionSer,$stateParams,$state,toastr){
    var webData ={id: $stateParams.id};

    //获取ID
    protionSer.protionId(webData).then(function(response){
        if(response.data.code==0){
            $scope.protion = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }

    });

    //编辑点击提交
    $scope.webEditFun = function(){
        var vm = $scope;
        protionSer.protionEdit(vm.protion).then(function(response){
            if(response.data.code == 0){
                $state.go('root.insurance.proportion.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});






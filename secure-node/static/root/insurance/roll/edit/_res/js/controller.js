var app = angular.module('rollEdit', ['toastr']);
app.controller('rollEditCtrl', function($scope, rollSer,$stateParams,$state,toastr){
    var webData ={id: $stateParams.id};

    //获取ID
    rollSer.rollId(webData).then(function(response){
        if(response.data.code==0){
            $scope.roll = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }

    });

    //编辑点击提交
    $scope.webEditFun = function(){
        var vm = $scope;
        rollSer.rollEdit(vm.roll).then(function(response){
            if(response.data.code == 0){
                $state.go('root.insurance.roll.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});






var app = angular.module('expireEdit', ['toastr']);
app.controller('expireEditCtrl', function($scope, expireSer,$stateParams,$state,toastr){
    var webData ={id: $stateParams.id};

    //获取ID
    expireSer.expireId(webData).then(function(response){
        if(response.data.code==0){
            $scope.expire = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }

    });

    //编辑点击提交
    $scope.webEditFun = function(){
        var vm = $scope;
        vm.expire.isAttachedAgin = angular.element('.po').val();
        expireSer.expireEdit(vm.expire).then(function(response){
            if(response.data.code == 0){
                $state.go('root.insurance.expire.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});






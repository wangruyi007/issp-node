var app = angular.module('abandEdit', ['toastr']);
app.controller('abandEditCtrl', function($scope, abandSer,$stateParams,$state,toastr){
    var webData ={id: $stateParams.id};

    //获取ID
    abandSer.abandId(webData).then(function(response){
        if(response.data.code==0){
            $scope.aband = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }

    });

    //编辑点击提交
    $scope.abandEditFun = function(){
        var vm = $scope;
        abandSer.abandEdit(vm.aband).then(function(response){
            if(response.data.code == 0){
                $state.go('root.insurance.abandon.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});






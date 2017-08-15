var app = angular.module('increEdit', ['toastr']);
app.controller('increEditCtrl', function($scope, increSer,$stateParams,$state,toastr){
    var webData ={id: $stateParams.id};

    //获取ID
    increSer.increId(webData).then(function(response){
        if(response.data.code==0){
            $scope.incre = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }

    });

    //编辑点击提交
    $scope.increEditFun = function(){
        var vm = $scope;
        vm.incre.startTime = angular.element('.startTime').val();
        vm.incre.officialTime = angular.element('.officialTime').val();
        vm.incre.secureTime = angular.element('.secureTime').val();
        increSer.increEdit(vm.incre).then(function(response){
            if(response.data.code == 0){
                $state.go('root.insurance.increase.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});






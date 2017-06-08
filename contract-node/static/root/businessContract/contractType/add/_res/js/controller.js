var app = angular.module('contractTypeAdd', ['toastr']);
app.controller('contractTypeAddCtrl', function($scope, contractSer,$state,toastr){

    //添加
    $scope.contractAddFun = function(){
        var vm = $scope;

        contractSer.addContract(vm.contract).then(function(response){
            if(response.data.code == 0){
                $state.go('root.businessContract.contractType.list');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });

    };

});





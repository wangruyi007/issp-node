var app = angular.module('contractTypeEdit', ['toastr']);
app.controller('contractTypeEditCtrl', function($scope, contractSer,$stateParams,$state,toastr){
    var basicData ={id: $stateParams.id};

    //获取ID
    contractSer.findContractId(basicData).then(function(response){
        if(response.data.code==0){
            $scope.editContract = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }

    });


    //编辑点击提交
    $scope.contractEditFun = function(){
        var vm = $scope;
        contractSer.editContract(vm.editContract).then(function(response){
            if(response.data.code == 0){
                $state.go('root.businessContract.contractType.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });

    };
});






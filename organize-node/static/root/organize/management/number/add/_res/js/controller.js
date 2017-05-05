var app = angular.module('numberAdd', ['toastr']);
app.controller('numberAddCtrl', function($scope,$state,toastr,numberSer){

    $scope.numberAddFun = function(){
        var vm = $scope;
        var data = {
            serialNumber:vm.serialNumber,
            classify:vm.classify,
            name:vm.name,
            description:vm.description
        };
        numberSer.addNumber(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.organize.management.number.list');
                toastr.success( vm.serialNumber+"已成功添加", '温馨提示');
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }
        });
    };
});






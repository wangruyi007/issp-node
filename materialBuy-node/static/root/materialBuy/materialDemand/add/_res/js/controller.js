var app = angular.module('demandAdd', ['toastr']);
app.controller('demandAddCtrl', function($scope,demandSer,$state,toastr){
    //添加
    $scope.demandAddFun = function(){
        var vm = $scope;
        $scope.demand.requiredDate=angular.element('.requiredDate').val();
        demandSer.addDemand(vm.demand).then(function(response){
            if(response.data.code == 0){
                $state.go('root.materialBuy.materialDemand.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});






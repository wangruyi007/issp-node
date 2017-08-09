var app = angular.module('actualAdd', ['toastr']);
app.controller('actualAddCtrl', function($scope, actualSer,$state,toastr){
    //获取所有地区
    actualSer.getAllArea().then(function (response) {
        if(response.data.code==0){
            $scope.getAllAreas = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    //获取完工时间
    actualSer.getMakespan().then(function (response) {
        if(response.data.code==0){
            $scope.getMakespans = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    //获取合同金额
    actualSer.getMoney().then(function (response) {
        if(response.data.code==0){
            $scope.getMoneys = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    //获取回款周期
    actualSer.getCycle().then(function (response) {
        if(response.data.code==0){
            $scope.getCycles = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    //获取难易度
    actualSer.getEasy().then(function (response) {
        if(response.data.code==0){
            $scope.getEasys = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    //获取毛利率
    actualSer.getProfit().then(function (response) {
        if(response.data.code==0){
            $scope.getProfits = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    //添加
    $scope.targetAddFun = function(){
        var vm = $scope;
        actualSer.addActual(vm.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.projectRoyalty.actualWeight.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});





var app = angular.module('weighAdd', ['toastr']);
app.controller('weightAddCtrl', function($scope, weightSer,$state,toastr){
    //获取所有地区
    weightSer.getAllArea().then(function (response) {
        if(response.data.code==0){
            $scope.getAllAreas = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    //获取完工时间
    weightSer.getMakespan().then(function (response) {
        if(response.data.code==0){
            $scope.getMakespans = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    //获取合同金额
    weightSer.getMoney().then(function (response) {
        if(response.data.code==0){
            $scope.getMoneys = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    //获取回款周期
    weightSer.getCycle().then(function (response) {
        if(response.data.code==0){
            $scope.getCycles = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    //获取难易度
    weightSer.getEasy().then(function (response) {
        if(response.data.code==0){
            $scope.getEasys = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    //获取毛利率
    weightSer.getProfit().then(function (response) {
        if(response.data.code==0){
            $scope.getProfits = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    //添加
    $scope.weightAddFun = function(){
        var vm = $scope;
        weightSer.addWeight(vm.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.projectRoyalty.weightAllocation.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});





var app = angular.module('weighEdit', ['toastr']);
app.controller('weighEditCtrl', function($scope, weightSer,$stateParams,$state,toastr){
    var weightData ={id: $stateParams.id};
    //获取ID
    weightSer.findWeightId(weightData).then(function(response){
        if(response.data.code==0){
            $scope.editWeight = response.data.data;
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }
    });
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
    //编辑点击提交
    $scope.weightEditFun = function(){
        var vm = $scope;
        var data = {
            id:vm.editWeight.id,
            completeId:vm.editWeight.complete,
            moneyId:vm.editWeight.money,
            cycleId:vm.editWeight.cycle,
            difficultyId:vm.editWeight.difficulty,
            rateId:vm.editWeight.rate,
            area:vm.editWeight.area,
            project:vm.editWeight.project,
            staff:vm.editWeight.staff,
            risk:vm.editWeight.risk,
            remark:vm.editWeight.remark,
        }
        weightSer.editWeigh(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.projectRoyalty.weightAllocation.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});






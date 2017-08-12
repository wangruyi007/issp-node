var app = angular.module('actualEdit', ['toastr']);
app.controller('actualEditCtrl', function($scope, actualSer,$stateParams,$state,toastr){
    var targetData ={id: $stateParams.id};
    //获取ID
    actualSer.findActualId(targetData).then(function(response){
        if(response.data.code==0){
            $scope.editActuals = response.data.data;
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }
    });
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
    //编辑点击提交
    $scope.actualEditFun = function(){
        var vm = $scope;
        var data = {
            id:vm.editActuals.id,
            completeId:vm.editActuals.complete,
            moneyId:vm.editActuals.money,
            cycleId:vm.editActuals.cycle,
            difficultyId:vm.editActuals.difficulty,
            rateId:vm.editActuals.rate,
            area:vm.editActuals.area,
            project:vm.editActuals.project,
            staff:vm.editActuals.staff,
            risk:vm.editActuals.risk,
            remark:vm.editActuals.remark,
        }
        actualSer.editActual(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.projectRoyalty.actualWeight.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});






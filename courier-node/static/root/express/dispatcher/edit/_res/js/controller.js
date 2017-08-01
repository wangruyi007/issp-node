var app = angular.module('dispatcherEdit', ['toastr']);
app.controller('dispatcherEditCtrl', function($scope, dispatcherSer,$stateParams,$state,toastr){
    var dispatcherData ={id: $stateParams.id};
    //获取ID
    dispatcherSer.findDispatcherId(dispatcherData).then(function(response){
        if(response.data.code==0){
            $scope.editDispatcher = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    $scope.selPro = function(){
        var data = {dormitoryAddress:$scope.disAdd.sendArrival};
        //获取所有寄、收件人的联系方式
        dispatcherSer.getAllTel(data).then(function (response) {
            if(response.data.code==0){
                $scope.disAdd.sendTel =response.data.data;
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
    $scope.selPro1 = function(){
        var data = {dormitoryAddress:$scope.disAdd.receiptArrival};
        //获取所有寄、收件人的联系方式
        dispatcherSer.getAllTel(data).then(function (response) {
            if(response.data.code==0){
                $scope.disAdd.receiptTel =response.data.data;
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
    //编辑点击提交
    $scope.dispatcherEditFun = function(){
        var vm = $scope;
        vm.editDispatcher.sendTime=angular.element('.sendTime').val();
        vm.editDispatcher.receiptTime=angular.element('.receiptTime').val();
        dispatcherSer.editGetDispatch(vm.editDispatcher).then(function(response){
            console.log(response)
            if(response.data.code == 0){
                $state.go('root.express.dispatcher.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });

    };
    //获取所有快递公司
    dispatcherSer.getAllCompany().then(function (response) {
        if(response.data.code==0){
            $scope.getAllCompanys = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    //获取所有地区
    dispatcherSer.getAllArea().then(function (response) {
        if(response.data.code==0){
            $scope.getAllAreas = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    //获取所有人
    dispatcherSer.getAllName().then(function (response) {
        if(response.data.code==0){
            $scope.getAllNames = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    //获取所有项目组
    dispatcherSer.getAllTeam().then(function (response) {
        if(response.data.code==0){
            $scope.getAllTeams = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });
});






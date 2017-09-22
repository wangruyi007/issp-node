var app = angular.module('deviceAdd', ['toastr']);
app.controller('dispatcherAddCtrl', function($scope,dispatcherSer,$state,toastr,$stateParams){
    //获取所有地区
    dispatcherSer.getAllArea().then(function (response) {
        if(response.data.code==0){
            $scope.getAllAreas = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
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
    //获取所有快递公司
    dispatcherSer.getAllCompany().then(function (response) {
        if(response.data.code==0){
            $scope.getAllCompanys = response.data.data;
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
    //添加
    $scope.dispatcherAddFun = function(){
        var vm = $scope;
        vm.disAdd.sendTime=angular.element('.sendTime').val();
        vm.disAdd.receiptTime=angular.element('.receiptTime').val();
        dispatcherSer.addDispatcher(vm.disAdd).then(function(response){
            console.log(response);
            if(response.data.code == 0){
                $state.go('root.express.dispatcher.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });

    };

});





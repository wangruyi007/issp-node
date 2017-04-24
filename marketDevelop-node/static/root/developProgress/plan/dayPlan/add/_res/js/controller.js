var app = angular.module('dayPlanAdd', ['toastr']);
app.controller('dayPlanAddCtrl', function($scope, dayPlanSer,$state,toastr){

    //年计划添加
    $scope.dayPlanAddFun = function(){
        var vm = $scope;
        var data = {
            serialNumber : vm.addSerialNumber,
            time : angular.element('.addTime').val(),
            business : vm.addBusiness,
            type : vm.addType,
            source : vm.addSource,
            name : vm.addName,
            content : vm.addContent,
            phase : vm.addPhase,
            quota : vm.addQuota,
            own : vm.addOwn,
            negotiation : vm.addNegotiation,
            budget : vm.addBudget,
            customer : vm.addCustomer,
            phone : vm.addPhone,
            businessContent : vm.addBusinessContent,
            coordinate : vm.addCoordinate
        };
        dayPlanSer.addDayPlan(data).then(function(response){
            console.log(response)
            if(response.data.code == 0){
                $state.go('root.developProgress.plan.dayPlan.list');
                toastr.success("天计划已成功添加", '温馨提示');
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }
        });

    };


});





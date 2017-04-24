var app = angular.module('dayPlanEdit', ['toastr']);
app.controller('dayPlanEditCtrl', function($scope, dayPlanSer,$stateParams,$state,toastr){
    var dayData ={dayId: $stateParams.id};


    dayPlanSer.daySearch(dayData).then(function(response){

        if(response.data.code=='0'){
            console.log(response)
            $scope.editDay = response.data.data;
        }else if (response.data.code==403){
            toastr.error( "请登录用户", '温馨提示');
        }

    });


    //编辑
    $scope.dayPlanEditFun = function(){
        var vm = $scope;
        var data = {
            id: vm.editDay.id,
            serialNumber: vm.editDay.serialNumber,
            time: vm.editDay.time,
            business : vm.editDay.business,
            type : vm.editDay.type,
            source : vm.editDay.source,
            name : vm.editDay.name,
            content : vm.editDay.content,
            phase : vm.editDay.phase,
            quota : vm.editDay.quota,
            own : vm.editDay.own,
            negotiation : vm.editDay.negotiation,
            budget : vm.editDay.budget,
            customer : vm.editDay.customer,
            phone : vm.editDay.phone,
            businessContent : vm.editDay.businessContent,
            coordinate : vm.editDay.coordinate
        };
        dayPlanSer.editDayPlan(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.developProgress.plan.dayPlan.list')
                toastr.success( "编辑成功", '温馨提示');
            }else if(response.data.code == 403){
                toastr.error( "请登录用户", '温馨提示');
            }
        });

    };


});






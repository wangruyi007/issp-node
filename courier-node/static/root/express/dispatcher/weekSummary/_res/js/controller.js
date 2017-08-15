var app = angular.module('weekSummary', ['toastr']);
app.controller('weekSummaryCtrl', function($scope,dispatcherSer,toastr){
    //周汇总
    $scope.collect1 = function(){
        var vm = $scope;
        vm.data={
            year:angular.element('.year').val(),
            month:angular.element('.month').val()
        };
        //获取当前月有几周
        dispatcherSer.getNowWeek(vm.data).then(function (response) {
            $scope.nowWeeks = response.data.data;
        });
    };
    $scope.collect2 = function(){
        var vm = $scope;
        vm.data={
            year:angular.element('.year').val(),
            month:angular.element('.month').val(),
            week:angular.element('.week').val()
        };
        dispatcherSer.getWeekCount(vm.data).then(function(response){
            if(response.data.code == 0){
                $scope.summaryLists = response.data.data;
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        })
    };
});





var app = angular.module('monthSummaryM', ['toastr']);
app.controller('monthSummaryCtrl', function($scope,dispatcherSer,toastr){
         //月汇总
        //获取当前月有几周
        dispatcherSer.getAllMonth().then(function (response) {
            $scope.nowMonths = response.data.data;
        });
        $scope.collect = function(){
        var vm = $scope;
        vm.data={
            year:angular.element('.year').val(),
            month:angular.element('.month').val(),
        };
        dispatcherSer.getMonthCount(vm.data).then(function(response){
            if(response.data.code == 0){
                $scope.summaryLists = response.data.data;
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        })
    };

});




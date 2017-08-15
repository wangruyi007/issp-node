var app = angular.module('daySummary', ['toastr']);
app.controller('daySummaryCtrl', function($scope,dispatcherSer,toastr){
    //日汇总
    $scope.collect = function(){
        var vm = $scope;
        vm.data={
            sendTime:angular.element('.sendTime').val(),
        };
        dispatcherSer.getDayCount(vm.data).then(function(response){
            if(response.data.code == 0){
                $scope.summaryLists = response.data.data;
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        })
    };

});





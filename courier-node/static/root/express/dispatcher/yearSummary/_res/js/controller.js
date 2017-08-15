var app = angular.module('yearSummary', ['toastr']);
app.controller('yearSummaryCtrl', function($scope,dispatcherSer,toastr){
    //年汇总
    dispatcherSer.getAllY().then(function (response) {
        if(response.data.code == 0){
            $scope.getAllYs = response.data.data;
        }
    });
    $scope.collect = function(){
        var vm = $scope;
        vm.data={
            year:angular.element('.year').val(),
        };
        dispatcherSer.getYearCount(vm.data).then(function(response){
            if(response.data.code == 0){
                $scope.allYearLists = response.data.data;
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        })
    };

});





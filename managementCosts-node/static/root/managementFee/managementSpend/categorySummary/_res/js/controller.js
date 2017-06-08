var app = angular.module('categorySummary', ['toastr']);
app.controller('categorySummaryCtrl', function($scope, spendSer,toastr){

    $scope.showed=true;

    $scope.collect = function(){
        var vm = $scope;
        vm.sum={
            startTime:angular.element('.start').val(),
            endTime:angular.element('.end').val(),
            type:vm.type
        };

        spendSer.categorySummary(vm.sum).then(function(response){
            if(response.data.code == 0){
                if( vm.sum.type == undefined || vm.sum.type == ''){
                    $scope.showed=true
                }else {
                    $scope.showed=false
                }
                $scope.summaryLists = response.data.data;
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        })
    };

});





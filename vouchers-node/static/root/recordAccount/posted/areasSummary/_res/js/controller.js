var app = angular.module('areasSummary', ['toastr']);
app.controller('areasSummaryCtrl', function($scope, postedSer,toastr){

    $scope.showed=true;
    // 获取所有地区
    postedSer.getArea().then(function(response){
        if(response.data.code == 0){
            $scope.areas = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    $scope.collect = function(){
        var vm = $scope;
        vm.sum={
            startTime:angular.element('.start').val(),
            endTime:angular.element('.end').val(),
            area:vm.area
        };
        postedSer.areasSummary(vm.sum).then(function(response){
            if(response.data.code == 0){
                if( vm.sum.area == undefined || vm.sum.area == ''){
                    $scope.showed=true
                }else {
                    $scope.showed=false
                }
                $scope.summaryLists = response.data.data;
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        })
    };

});





var app = angular.module('entrySummary', ['toastr','angularjs-dropdown-multiselect']);
app.controller('entrySummaryCtrl', function($scope, basicInfoSer,toastr){
    $scope.postNames = [];
    $scope.stringSettings = {template : '{{option}}', smartButtonTextConverter(skip, option) { return option; }};

    // 获取地区
    basicInfoSer.getAllPost().then(function(response){
        if(response.data.code == 0){
            $scope.workOptions = response.data.data;
        } else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    $scope.collect = function(){
        var vm = $scope;
        vm.sum={
            startDate:angular.element('.start').val(),
            endDate:angular.element('.end').val(),
            postNames:vm.postNames
        };
        basicInfoSer.collectBasicInfo(vm.sum).then(function(response){
            if(response.data.code == 0){
                $scope.summaryLists = response.data.data;
            }else {
                toastr.error(response.data.msg,'温馨提示');
            }
        })
    };

});





var app = angular.module('collectSummary', ['toastr','angularjs-dropdown-multiselect']);
app.controller('collectSummaryCtrl', function($scope,$state,toastr,proWeekSer){
   //查询所有项目
    $scope.projects = [];
    $scope.stringSettings = {template : '{{option}}', smartButtonTextConverter(skip, option) { return option; }};
    proWeekSer.listSummaryProject().then(function(response){
        if(response.data.code == 0){
            $scope.workOptions = response.data.data;
        } else if(response.data.code == 403){
            toastr.error("请登录用户", '温馨提示');
        }
    });
    $scope.getSummary ={onSelectionChanged(){
        proWeekSer.collectProject($scope.projects).then(function(response){
            if(response.data.code == 0){
                $scope.summaryLists = response.data.data;
            }
        })
    }};
    proWeekSer.collectProject2().then(function(response){
        if(response.data.code == 0&&response.data.data){
            $scope.summaryLists = response.data.data
        }
    });
});






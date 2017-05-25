var app = angular.module('collectSummary', ['toastr', 'angularjs-dropdown-multiselect']);
app.controller('collectSummaryCtrl', function($scope,$state,toastr,monthSer){
   //查询所有项目
    $scope.projects = [];
    $scope.stringSettings = {template : '{{option}}', smartButtonTextConverter(skip, option) { return option; }};
    monthSer.listMonthProject().then(function(response){
        if(response.data.code == 0){
            $scope.workOptions = response.data.data;
        } else if(response.data.code == 403){
            toastr.error("请登录用户", '温馨提示');
        }
    });
    $scope.getSummary ={onSelectionChanged(){
        monthSer.collectMonthProject($scope.projects).then(function(response){
            if(response.data.code == 0){
                $scope.summaryLists = response.data.data;
            }
        })
    }};
    monthSer.collectMonthProject2().then(function(response){
        if(response.data.code == 0&&response.data.data){
            $scope.summaryLists = response.data.data
        }
    });
});






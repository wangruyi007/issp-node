/**
 * Created by ike on 2017/4/17.
 */
var app = angular.module('informationSummary', ['toastr','angularjs-dropdown-multiselect']);
app.controller('informationSummaryCtrl', function($scope, informationSer,toastr){
    $scope.areas = [];
    $scope.stringSettings = {template : '{{option}}', smartButtonTextConverter(skip, option) { return option; }};
    //获取公司
    informationSer.listSummaryArea().then(function(response){
        if(response.data.code == 0){
            $scope.workOptions = response.data.data;
        } else if(response.data.code == 403){
            toastr.error("请登录用户", '温馨提示');
        }
    });
    $scope.getSummary ={onSelectionChanged(){
        informationSer.summaryInformation($scope.areas).then(function(response){
            if(response.data.code == 0){
                $scope.settlementSummarys = response.data.data;
            }
        })
    }}
});






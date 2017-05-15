/**
 * Created by ike on 2017/4/17.
 */
var app = angular.module('emailSummary', ['toastr','angularjs-dropdown-multiselect']);
app.controller('emailSummaryCtrl', function($scope, emailSer,toastr){
    $scope.words = [];
    $scope.stringSettings = {template : '{{option}}', smartButtonTextConverter(skip, option) { return option; }};
    //获取公司
    emailSer.getCompanyNames().then(function(response){
        if(response.data.code == 0){
            $scope.workOptions = response.data.data;
        } else if(response.data.code == 403){
            toastr.error("请登录用户", '温馨提示');
        }
    });
    $scope.getSummary ={onSelectionChanged(){
        emailSer.ectSummaryCompany($scope.words).then(function(response){
            if(response.data.code == 0){
                  $scope.summaryLists = response.data.data;
            }
        })
    }}
});






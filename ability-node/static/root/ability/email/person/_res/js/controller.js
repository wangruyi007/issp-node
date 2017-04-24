/**
 * Created by ike on 2017/4/17.
 */
var app = angular.module('emailPerson', ['toastr','angularjs-dropdown-multiselect']);
app.controller('emailPersonCtrl', function($scope, emailSer,toastr){
    $scope.words = [];
    $scope.stringSettings = {template : '{{option}}', smartButtonTextConverter(skip, option) { return option; }};
    //获取公司
    emailSer.getPersonNames().then(function(response){
        if(response.data.code == 0){
            $scope.workOptions = response.data.data;
        } else if(response.data.code == 403){
            toastr.error("请登录用户", '温馨提示');
        }
    });
    $scope.getSummary ={onSelectionChanged(){
        emailSer.ectSummaryPerson($scope.words).then(function(response){
            if(response.data.code == 0){
                $scope.summarypersons = response.data.data[0].collectDataList;
            }
        })
    }}
});






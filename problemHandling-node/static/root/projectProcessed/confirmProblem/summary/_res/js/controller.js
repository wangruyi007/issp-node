
var app = angular.module('summary', ['toastr','angularjs-dropdown-multiselect']);
app.controller('summaryCtrl', function($scope, confirmSer,toastr){
    $scope.areas = [];
    $scope.stringSettings = {template : '{{option}}', smartButtonTextConverter(skip, option) { return option; }};
    //获取地区
    confirmSer.getArea().then(function(response){
        if(response.data.code == 0){
            $scope.workOptions = response.data.data;
        }else if(response.data.code==1){
            toastr.error( response.data.msg, '温馨提示');
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    $scope.getSummary ={onSelectionChanged(){
        confirmSer.summaryList($scope.areas).then(function(response){
            if(response.data.code == 0){
                $scope.summaryLists = response.data.data;
            }else if(response.data.code==1){
                toastr.error( response.data.msg, '温馨提示');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        })
    }}
});






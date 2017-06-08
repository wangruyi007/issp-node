
var app = angular.module('basicSummary', ['toastr','angularjs-dropdown-multiselect']);
app.controller('basicSummaryCtrl', function($scope, emailSer,toastr){
    $scope.firstCompany = [];
    $scope.stringSettings = {template : '{{option}}', smartButtonTextConverter(skip, option) { return option; }};
    //获取地区
    emailSer.getBasicArea().then(function(response){
        if(response.data.code == 0){
            $scope.workOptions = response.data.data;
        } else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    $scope.getSummary ={onSelectionChanged(){

        emailSer.basicSummary($scope.firstCompany).then(function(response){
            if($scope.firstCompany.length==0){
                $scope.summaryLists = {};
            }else {
                if(response.data.code == 0){
                    $scope.summaryLists = response.data.data;
                    angular.forEach($scope.summaryLists,function(item,index){
                        if(item.type=="合计"){
                            $scope.tabTit = item;
                        }
                    });
                }else{
                    toastr.error(response.data.msg, '温馨提示');
                }
            }

        })
    }}
});






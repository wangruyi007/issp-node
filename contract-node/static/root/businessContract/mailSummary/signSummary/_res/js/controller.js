
var app = angular.module('signSummary', ['toastr','angularjs-dropdown-multiselect']);
app.controller('signSummaryCtrl', function($scope, emailSer,toastr){
    $scope.areas = [];
    $scope.stringSettings = {template : '{{option}}', smartButtonTextConverter(option) { return option; }};
    //获取地区
    emailSer.getSignArea().then(function(response){
        if(response.data.code == 0){
            $scope.workOptions = response.data.data;
        } else if(response.data.code == 403){
            toastr.error("请登录用户", '温馨提示');
        }
    });
    $scope.getSummary ={onSelectionChanged(){
        emailSer.signSummary($scope.areas).then(function(response){
            if($scope.areas.length == 0){
                $scope.summaryLists = {}
            }else{
                if(response.data.code == 0){
                    $scope.summaryLists = response.data.data;
                    angular.forEach($scope.summaryLists,function(item){
                        if(item.type=="合计"){
                            $scope.tabTit = item;
                        }
                    });
                }
            }

        })
    }}
});






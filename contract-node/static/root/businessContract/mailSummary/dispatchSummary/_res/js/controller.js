
var app = angular.module('dispatchSummary', ['toastr','angularjs-dropdown-multiselect']);
app.controller('dispatchSummaryCtrl', function($scope, emailSer,toastr){
    $scope.areas = [];
    $scope.stringSettings = {template : '{{option}}', smartButtonTextConverter(skip, option) { return option; }};
    //获取地区
    emailSer.getDispatchArea().then(function(response){
        if(response.data.code == 0){
            $scope.workOptions = response.data.data;
        } else if(response.data.code == 403){
            toastr.error("请登录用户", '温馨提示');
        }
    });
    $scope.getSummary ={onSelectionChanged(){
        emailSer.dispatchSummary($scope.areas).then(function(response){
            if($scope.areas.length == 0){
                $scope.summaryLists = {}
            }else{
                if(response.data.code == 0){
                    $scope.summaryLists = response.data.data;
                    angular.forEach($scope.summaryLists,function(item,index){
                        if(item.type=="合计"){
                            $scope.tabTit = item;
                        }
                    });
                }
            }

        })
    }}
});






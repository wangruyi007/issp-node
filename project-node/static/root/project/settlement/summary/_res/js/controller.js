var app = angular.module('settlementSummary', ['toastr']);
app.controller('settlementSummaryCtrl', function($scope, settlementSer,toastr){
    settlementSer.summarySettlement().then(function(response){
        if(response.data.code==0){
            $scope.settlementSummarys = response.data.data
            angular.forEach($scope.settlementSummarys,function(item,index){
                if(item.outsourcingUnit=="合计"){
                    $scope.tabTit = item.collectDataForBusinessList;
                    console.log(item.collectDataForBusinessList)
                }
            });
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
});






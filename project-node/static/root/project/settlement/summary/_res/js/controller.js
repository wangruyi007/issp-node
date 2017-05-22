/**
 * Created by ike on 2017/4/17.
 */
var app = angular.module('settlementSummary', ['toastr']);
app.controller('settlementSummaryCtrl', function($scope, settlementSer,toastr){
    settlementSer.summarySettlement().then(function(response){
        if(response.data.code==0){
            $scope.settlementSummarys = response.data.data
        }else{
            toastr.error( "请求超时，请联系管理员", '温馨提示');
        }
    });
});






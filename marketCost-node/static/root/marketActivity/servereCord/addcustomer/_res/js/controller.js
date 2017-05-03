/**
 * Created by ike on 2017/4/17.
 */
var app = angular.module('servecustomerAdd', ['toastr']);
app.controller('servereCordAddcustomerCtrl', function($scope, servereCordSer,$state,toastr){
    //添加竞争对手
    $scope.customerAddFun = function(){
        var data = $scope.data;
        servereCordSer.addCustomerinfo(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.marketActivity.servereCord.list');
                toastr.success( "已成功添加", '温馨提示');
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }
        });
    };
});





/**
 * Created by ike on 2017/4/17.
 */
var app = angular.module('commonAdd', ['toastr']);
app.controller('commonAddCtrl', function($scope, assetsSer,$state,toastr){
     var firstData = {
        categoryName:'COMMON'
    }
    //获取一级列表
    assetsSer.firstList(firstData).then(function(response){
        if(response.data.code == 0){
                $scope.firstList = response.data.data;
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
        }
    })
    //添加
    $scope.AddFun = function(){
        var data = $scope.data;
        assetsSer.addMarketserveapply1(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.initialize.sort.common.list');
                toastr.success( "已成功添加", '温馨提示');
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }
        });
    };
});





/**
 * Created by ike on 2017/4/17.
 */
var app = angular.module('profitfLossAdd', ['toastr','ipCookie']);
app.controller('profitfLossAddCtrl', function($scope, assetsSer,$state,toastr,ipCookie,$location){
    var firstData = {
        categoryName:'PROFITLOSS'
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
                $state.go('root.initialize.sort.profitfLoss.list');
                toastr.success( "已成功添加", '温馨提示');
            }else if(response.data.code==403 || response.data.code == 401){
                toastr.error( "请登录用户,3秒后跳至登陆页面", '温馨提示');
                var absurl = $location.absUrl();
                ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes',domain:'issp.bjike.com' });
                setTimeout(function(){
                    window.location.href='http://localhost/login'
                },3000)
            }
        });
    };
});





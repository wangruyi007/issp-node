/**
 * Created by ike on 2017/4/17.
 */
var app = angular.module('assetsAdd', ['toastr','ipCookie']);
app.controller('assetsAddCtrl', function($scope, assetsSer,$state,toastr,ipCookie,$location){
    var firstData = {
        categoryName:'ASSETS'
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
        $scope.data.startTime = angular.element('.startTiming').val();//计划时间
        var data = $scope.data;
        assetsSer.addMarketserveapply1(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.initialize.sort.assets.list');
                toastr.success( "已成功添加", '温馨提示');
            }else if(response.data.code==403 || response.data.code == 401){
                    toastr.error( "请登录用户,3秒后跳至登陆页面", '温馨提示');
                    var absurl = $location.absUrl();
                    ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes' });
                    setTimeout(function(){
                        window.location.href='http://localhost/login'
                    },3000)
                }
        });
    };
    //控制数字不能小于1
    $scope.changeNum =function(){
        if($scope.data.predictAttendNo < 1){
            $scope.data.predictAttendNo = 1;
        }
    }
});





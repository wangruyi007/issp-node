/**
 * Created by ike on 2017/4/17.
 */
var app = angular.module('messageAdd', ['toastr','ipCookie']);
app.controller('messageAddCtrl', function($scope, currencySer,$state,toastr,ipCookie,$location){

    //月份
    $scope.monthList = [1,2,3,4,5,6,7,8,9,10,11,12];

    //添加
    $scope.AddFun = function(){
        var data = $scope.data;
        $scope.data.target = Number($scope.target).toFixed(2);//目标费用
        $scope.data.actual = Number($scope.actual).toFixed(2);//实际费用
        currencySer.addMarketserveapply1(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.otherexpenses.expenses.message.list');
                toastr.success( "已成功添加", '温馨提示');
            }else if(response.data.code==403  || response.data.code==401){
                toastr.error( "请登录用户,3秒后跳至登陆页面", '温馨提示');
                var absurl = $location.absUrl();
                ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes',domain:'issp.bjike.com' });
                setTimeout(function(){
                    window.location.href='http://localhost/login'
                },3000)
            }
        });
    };
    
    //控制年份为整数
    $scope.changeNum =function(val){
        if($scope.year){
            $scope.data.year = parseInt(val);
        }
    }
});




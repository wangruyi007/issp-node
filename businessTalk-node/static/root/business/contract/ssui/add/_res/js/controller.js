var app = angular.module('ssuiAdd', ['toastr','ipCookie']);
app.controller('ssuiAddCtrl', function($scope, ssuiSer,$state,toastr,ipCookie,$location){
    //添加
    $scope.companyAddFun = function(){
         $scope.data.communicateDate = angular.element('.Time').val();//洽谈时间
         $scope.data.costBudget = Number($scope.num).toFixed(2);//项目预算
        var data = $scope.data;
        ssuiSer.addMarketserveapply(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.business.contract.ssui.list');
                toastr.success( "已成功添加", '温馨提示');
            }else if(response.data.code==403 || response.data.code==401){
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





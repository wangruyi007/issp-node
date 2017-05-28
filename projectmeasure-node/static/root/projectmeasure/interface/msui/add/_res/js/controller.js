var app = angular.module('msuiAdd', ['toastr','ipCookie']);
app.controller('msuiAddCtrl', function($scope, msuiSer,$state,toastr,ipCookie,$location){
    //添加
    $scope.companyAddFun = function(){
        $scope.data.profit = Number($scope.num).toFixed(2);//预计比重
        var data = $scope.data;
        msuiSer.addMarketserveapply(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.projectmeasure.interface.msui.list');
                toastr.success( "已成功添加", '温馨提示');
            }else if(response.data.code==403  || response.data.code==401){
                toastr.error( "请登录用户,3秒后跳至登陆页面", '温馨提示');
                var absurl = $location.absUrl();
                ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes',domain:'issp.bjike.com' });
                setTimeout(function(){
                    window.location.href='http://localhost/login'
                },3000)
            }else if(response.data.code == 1){
                toastr.error( response.data.msg, '温馨提示');
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





var app = angular.module('areaWeekAdd', ['toastr']);
app.controller('areaWeekAddCtrl', function($scope,$state,toastr,areaWeekSer,ipCookie,$location){
    $scope.areaAddFun = function(){
        areaWeekSer.addAreaWeek($scope.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.budget.areaWeek.list');
                toastr.success("已成功添加", '温馨提示');
            }else if (response.data.code == 403||response.data.code == 401) {
                toastr.error( "请登录用户,3秒后跳至登陆页面", '温馨提示');
                var absurl = $location.absUrl();
                ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes' });
                setTimeout(function(){
                    window.location.href='http://localhost/login'
                },3000)
            }
        });
    };
});






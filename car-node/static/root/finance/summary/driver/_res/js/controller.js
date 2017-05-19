var app = angular.module('driver', ['ng-pagination','toastr','ipCookie']);
app.controller('driverCtrl',function($scope,summarySer,toastr,ipCookie){
    $scope.showtype = true;
    $scope.moreList = function(event){
        angular.forEach($scope.listdriver,function(obj){
            if(event.id!==obj.id){
                obj._moreList = false
            }
        });
        event._moreList = !event._moreList;
    };
    $scope.driverSum = function(){
        summarySer.listDriver($scope.collect).then(function(response){
            if(response.data.code==0){
                $scope.listdriver = response.data.data;
                $scope.showtype = true;
            }else if(response.data.code==403||response.data.code==401){
                toastr.error( "请登录用户,2秒后跳至登陆页面", '温馨提示');
                var absurl = $location.absUrl();
                ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes' });
                setTimeout(function(){
                    window.location.href='http://localhost/login'
                },2000)
            }else{
                toastr.error( "请求超时，请联系管理员", '温馨提示');
            }
        });
    };
    $scope.driverAna = function(){
        summarySer.driAnalysis($scope.collect).then(function(response){
            if(response.data.code==0){
                $scope.listanalysis = response.data.data;
                $scope.showtype = false;
            }else if(response.data.code==1){
                toastr.error( response.data.msg, '温馨提示');
            }else if(response.data.code==403||response.data.code==401){
                toastr.error( "请登录用户,2秒后跳至登陆页面", '温馨提示');
                var absurl = $location.absUrl();
                ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes' });
                setTimeout(function(){
                    window.location.href='http://localhost/login'
                },2000)
            }else {
                toastr.error( "请求超时，请联系管理员", '温馨提示');
            }
        });
    };
});
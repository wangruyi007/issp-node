var app = angular.module('area', ['ng-pagination','toastr','ipCookie']);
app.controller('areaCtrl',function($scope,summarySer,toastr,ipCookie,$location){
    $scope.areatype=true;
    $scope.moreList = function(event){
        angular.forEach($scope.listarea,function(obj){
            if(event.id!==obj.id){
                obj._moreList = false
            }
        });
        event._moreList = !event._moreList;
    };
    $scope.areaSum = function(){
        summarySer.listArea($scope.collect).then(function(response){
            if(response.data.code==0){
                $scope.listarea = response.data.data;
                $scope.areatype=true;
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
    $scope.areaAna = function(){
        summarySer.areaAna($scope.collect).then(function(response){
            if(response.data.code==0){
                $scope.areaanalyze = response.data.data;
                $scope.areatype=false;
            }else if(response.data.code==1){
                toastr.error( response.data.msg, '温馨提示');
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
});
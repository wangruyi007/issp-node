var app = angular.module('area', ['toastr','ipCookie']);
app.controller('emailcollectCtrl', function($scope, emailSer,toastr,$location,ipCookie){

    
    emailSer.allCollect($scope.data).then(function(response){
        if(response.data.code == 0){
            $scope.showed = false;
            $scope.summaryLists = response.data.data;
        }else if(response.data.code==403||response.data.code==401){
            toastr.error( "请登录用户,2秒后跳至登陆页面", '温馨提示');
            var absurl = $location.absUrl();
            ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes',domain:'issp.bjike.com'});
            setTimeout(function(){
                window.location.href='http://localhost/login'
            },2000)
        }else if(response.data.code == 1){
             toastr.error( response.data.msg, '温馨提示');
        }
    })

});





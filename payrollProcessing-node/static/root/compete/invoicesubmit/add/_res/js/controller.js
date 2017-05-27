var app = angular.module('invoicesubmitAdd', ['toastr','ipCookie']);
app.controller('invoicesubmitAddCtrl', function($scope, invoicesubmitSer,$state,toastr,ipCookie,$location){
    //添加个人能力
    $scope.invoicesubmitAddFun = function(){
        var d =  angular.element('.time').val();
        var data = $scope.data;
        data.submitDate=d;
        //后台没写选项中的例子
        invoicesubmitSer.invoicesubmitAdd(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.compete.invoicesubmit.list');
                toastr.success( "公司已成功添加", '温馨提示');
            }else if(response.data.code==403||response.data.code==401){

                toastr.error( "请登录用户,2秒后跳至登陆页面", '温馨提示');
                var absurl = $location.absUrl();
                ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes' });
                setTimeout(function(){
                    window.location.href='http://localhost/login'
                },2000)
            }
        });

    };
});






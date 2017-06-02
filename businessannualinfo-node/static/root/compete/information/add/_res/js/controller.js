var app = angular.module('informationAdd', ['toastr','ipCookie']);
app.controller('informationAddCtrl', function($scope, informationSer,$state,toastr,ipCookie,$location){

    //添加个人能力
    $scope.informationAddFun = function(){
        var d =  angular.element('.time').val();
        var y =  angular.element('.state').val();
        var data = $scope.data;
        data.submitDate=d;
        data.status=y;
        informationSer.annualAdd(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.compete.information.list');
                toastr.success( "公司已成功添加", '温馨提示');
            }else if(response.data.code==403||response.data.code==401){

                toastr.error( "请登录用户,2秒后跳至登陆页面", '温馨提示');
                var absurl = $location.absUrl();
                ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes' });
                setTimeout(function(){
                    window.location.href='http://localhost/login'
                },2000)
            }else{
                toastr.error(response.data.msg,'温馨提示');
            }
        });

    };
});






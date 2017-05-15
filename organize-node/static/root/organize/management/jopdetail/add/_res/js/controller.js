var app = angular.module('jopdetailAdd', ['toastr','ipCookie']);
app.controller('jopdetailAddCtrl', function($scope,$state,toastr,jopdetailSer,ipCookie,$location){

    jopdetailSer.getPosiInst().then(function(response){
        if(response.data.code==0){
            $scope.positions= response.data.data;
        }
    });
    $scope.jopdetailAddFun = function(){
        $scope.add.reportTime = angular.element('.time').val();
       
        jopdetailSer.addJopDetail($scope.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.organize.management.jopdetail.list');
                toastr.success( response.data.data.serialNumber+"已成功添加", '温馨提示');
            }else if(response.data.code==403||response.data.code==401){
                toastr.error( "请登录用户,2秒后跳至登陆页面", '温馨提示');
                var absurl = $location.absUrl();
                ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes' });
                setTimeout(function(){
                    window.location.href='http://localhost/login'
                },2000)
            }
        });
    }
});






var app = angular.module('basicAdd', ['toastr','ipCookie']);
app.controller('basicAddCtrl', function($scope, basicSer,$state,toastr,$location,ipCookie){

    //添加
    $scope.basicAddFun = function(){
        var vm = $scope;
        vm.basic.siginTime = angular.element('.siginTime').val();
        vm.basic.startProjectTime = angular.element('.addTime').val();
        vm.basic.endProjectTime = angular.element('.endTime').val();
        basicSer.addBasicInfo(vm.basic).then(function(response){
            if(response.data.code == 0){
                $state.go('root.businessContract.basicInfo.list');
                toastr.success("已成功添加", '温馨提示');
            }else if(response.data.code==403||response.data.code==401){
                toastr.error( "请登录用户,3秒后跳至登陆页面", '温馨提示');
                var absurl = $location.absUrl();
                ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes',domain:'issp.bjike.com' });
                setTimeout(function(){
                    window.location.href='http://localhost/login'
                },3000)
            }
        });

    };

});





var app = angular.module('rewardAdd', ['toastr']);
app.controller('rewardAddCtrl', function($scope, basicinfoSer,$state,toastr,$stateParams,ipCookie,$location){
    var rewardId = {id : $stateParams.id};
    //获取值
    basicinfoSer.editBasicInfoById(rewardId).then(function(response){
        if(response.data.code==0){
            $scope.peditInfo = response.data.data;
        }
    });
    //添加
    $scope.rewardAddFun= function(){
        var vm = $scope;
        vm.peditInfo.acquisition = angular.element('.acquisition').val();
        basicinfoSer.rewardBasicAdd(vm.peditInfo).then(function(response){
            if(response.data.code == 0){
                $state.go('root.supplier.basicinfo.list');
                toastr.success("已成功添加", '温馨提示');
            }else if (response.data.code == 403||response.data.code == 401) {
                toastr.error( "请登录用户,3秒后跳至登陆页面", '温馨提示');
                var absurl = $location.absUrl();
                ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes',domain:'issp.bjike.com' })
                setTimeout(function(){
                    window.location.href='http://localhost/login'
                },3000)
            }
        });
    };
});





var app = angular.module('dispatchAdd', ['toastr','ipCookie']);
app.controller('dispatchAddCtrl', function($scope, dispatchSer,$state,toastr,$location,ipCookie){
    //获取内部项目编号
    dispatchSer.getInnerNum().then(function(response){
        if(response.data.code==0){
            $scope.inner= response.data.data;
        }
    });
    //添加
    $scope.workersAddFun = function(){
        var vm = $scope;
        vm.workers.siginTime = angular.element('.siginTime').val();
        vm.workers.startProjectTime = angular.element('.addTime').val();
        vm.workers.endProjectTime = angular.element('.endTime').val();
        dispatchSer.addDispatchWorkers(vm.workers).then(function(response){
            if(response.data.code == 0){
                $state.go('root.businessContract.dispatchList.list');
                toastr.success("已成功添加", '温馨提示');
            }else if(response.data.code==403||response.data.code==401){
                toastr.error( "请登录用户,3秒后跳至登陆页面", '温馨提示');
                var absurl = $location.absUrl();
                ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes',domain:'issp.bjike.com' });
                setTimeout(function(){
                    window.location.href='http://localhost/login'
                },3000)
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });

    };

});





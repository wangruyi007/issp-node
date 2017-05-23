var app = angular.module('handleAdd', ['toastr']);
app.controller('handleAddCtrl', function ($scope, handleSer, $state, toastr,ipCookie,$location) {
    handleSer.allHandProjects().then(function(response){
          if(response.data.code == 0){
            $scope.proData = response.data.data;
        }
    });
    //添加
    $scope.handleAddFun = function () {
        var vm = $scope;
        vm.add.disposeStartTime = angular.element('.disposeStartTime').val();
        vm.add.disposeEndTime = angular.element('.disposeEndTime').val();
        handleSer.addHand(vm.add).then(function (response) {
            if (response.data.code == 0) {
                $state.go('root.assessment.handle.list');
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





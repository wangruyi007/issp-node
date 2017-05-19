var app = angular.module('dispatchEdit', ['toastr','ipCookie']);
app.controller('dispatchEditCtrl', function($scope, dispatchSer,$stateParams,$state,toastr,$location,ipCookie){
    var basicData ={id: $stateParams.id};

    //获取ID
    dispatchSer.findDispatchWorkersId(basicData).then(function(response){
        if(response.data.code=='0'){
            $scope.editSheet = response.data.data;
        }else if (response.data.code==403){
            toastr.error( "请登录用户", '温馨提示');
        }

    });


    //编辑点击提交
    $scope.workersEditFun = function(){
        var vm = $scope;
        vm.editSheet.siginTime = angular.element('.siginTime').val();
        vm.editSheet.startProjectTime = angular.element('.addTime').val();
        vm.editSheet.endProjectTime = angular.element('.endTime').val();
        dispatchSer.editDispatchWorkers(vm.editSheet).then(function(response){
            console.log(response);
            if(response.data.code == 0){
                $state.go('root.businessContract.dispatchList.list');
                toastr.success( "编辑成功", '温馨提示');
            }else if(response.data.code==403||response.data.code==401){
                toastr.error( "请登录用户,3秒后跳至登陆页面", '温馨提示');
                var absurl = $location.absUrl();
                ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes' });
                setTimeout(function(){
                    window.location.href='http://localhost/login'
                },3000)
            }
        });

    };
});






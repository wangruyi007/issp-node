var app = angular.module('operationEdit', ['toastr','ipCookie']);
app.controller('operationEditCtrl', function($scope,$state,toastr,operationSer,$stateParams,ipCookie,$location){
    var operateData ={id: $stateParams.id};
    operationSer.getOperation(operateData).then(function(response){
        if(response.data.code == 0){
            $scope.editOperate = response.data.data
        }
    });

    //提交编辑
    $scope.operateEditFun = function(){
        var vm = $scope;
        operationSer.editOperation(vm.editOperate).then(function(response){
            if(response.data.code == 0){
                $state.go('root.organize.management.operation.list');
                toastr.success( "已成功编辑", '温馨提示');
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






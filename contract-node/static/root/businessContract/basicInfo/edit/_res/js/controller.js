var app = angular.module('basicEdit', ['toastr','ipCookie']);
app.controller('basicEditCtrl', function($scope, basicSer,$stateParams,$state,toastr,$location,ipCookie){
    var basicData ={id: $stateParams.id};

    //获取ID
    basicSer.findBasicInfoId(basicData).then(function(response){
        if(response.data.code=='0'){
            $scope.editBasic = response.data.data;
        }else if (response.data.code==403){
            toastr.error( "请登录用户", '温馨提示');
        }

    });


    //编辑点击提交
    $scope.basicEditFun = function(){
        var vm = $scope;
        vm.editBasic.siginTime = angular.element('.siginTime').val();
        vm.editBasic.startProjectTime = angular.element('.addTime').val();
        vm.editBasic.endProjectTime = angular.element('.endTime').val();
        basicSer.editBasicInfo(vm.editBasic).then(function(response){
            if(response.data.code == 0){
                $state.go('root.businessContract.basicInfo.list');
                toastr.success( "编辑成功", '温馨提示');
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






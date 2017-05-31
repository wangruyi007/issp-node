var app = angular.module('signingEdit', ['toastr','ipCookie']);
app.controller('signingEditCtrl', function($scope, signingSer,$stateParams,$state,toastr,$location,ipCookie){
    var discussData ={id: $stateParams.id};

    //获取ID
    signingSer.findSigningId(discussData).then(function(response){
        if(response.data.code=='0'){
            $scope.editSigning = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }

    });


    //编辑点击提交
    $scope.signingEditFun = function(){
        var vm = $scope;
        vm.editSigning.startProjectTime = angular.element('.addTime').val();
        vm.editSigning.endProjectTime = angular.element('.endTime').val();
        signingSer.editSigning(vm.editSigning).then(function(response){
            if(response.data.code == 0){
                $state.go('root.businessContract.signingProject.list');
                toastr.success( "编辑成功", '温馨提示');
            }else if(response.data.code==403||response.data.code==401){
                toastr.error( "请登录用户,3秒后跳至登陆页面", '温馨提示');
                var absurl = $location.absUrl();
                ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes',domain:'issp.bjike.com' });
                setTimeout(function(){
                    window.location.href='http://localhost/login'
                },3000)
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});






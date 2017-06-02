var app = angular.module('contactEdit', ['toastr','ipCookie']);
app.controller('contactEditCtrl', function($scope, contactSer,$stateParams,$state,toastr,$location,ipCookie){
    var interactData ={id: $stateParams.id};

    //获取ID
    contactSer.findInteractId(interactData).then(function(response){
        if(response.data.code=='0'){
            $scope.editConact = response.data.data;
        }else if (response.data.code==403){
            toastr.error( "请登录用户", '温馨提示');
        }

    });

    //编辑点击提交
    $scope.contactEditFun = function(){
        var vm = $scope;
        contactSer.editInteract(vm.editConact).then(function(response){
            if(response.data.code == 0){
                $state.go('root.businessInteraction.interactContact.list');
                toastr.success( "编辑成功", '温馨提示');
            }else if(response.data.code==403||response.data.code==401){
                toastr.error( "请登录用户,2秒后跳至登陆页面", '温馨提示');
                var absurl = $location.absUrl();
                ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes',domain:'issp.bjike.com' });
                setTimeout(function(){
                    window.location.href='http://localhost/login'
                },2000)
            }else if(response.data.code==1){
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});






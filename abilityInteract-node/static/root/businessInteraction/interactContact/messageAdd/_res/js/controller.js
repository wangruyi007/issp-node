var app = angular.module('messageAdd', ['toastr','ipCookie']);
app.controller('messageAddCtrl', function($scope, contactSer,$stateParams,$state,toastr,$location,ipCookie){
    var interactData ={id: $stateParams.id};

    //获取ID
    contactSer.findInteractId(interactData).then(function(response){
        if(response.data.code=='0'){
            $scope.addMsg = response.data.data;
        }else if (response.data.code==403){
            toastr.error( "请登录用户", '温馨提示');
        }

    });
    //添加
    $scope.messageAddFun = function(){
        var vm = $scope;
        vm.addMsg.interactionId = $stateParams.id;
        contactSer.addMessage(vm.addMsg).then(function(response){
            if(response.data.code == 0){
                $state.go('root.businessInteraction.interactContact.list');
                toastr.success("已成功添加", '温馨提示');
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





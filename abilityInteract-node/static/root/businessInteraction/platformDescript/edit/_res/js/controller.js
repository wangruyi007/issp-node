var app = angular.module('descriptEdit', ['toastr','ipCookie']);
app.controller('descriptEditCtrl', function($scope, descriptSer,$stateParams,$state,toastr,$location,ipCookie){
    var interactData ={id: $stateParams.id};

    //获取ID
    descriptSer.findDescriptId(interactData).then(function(response){
        if(response.data.code=='0'){
            $scope.editDescript = response.data.data;
        }else if (response.data.code==403){
            toastr.error( "请登录用户", '温馨提示');
        }

    });


    //编辑点击提交
    $scope.demandEditFun = function(){
        var vm = $scope;
        descriptSer.editDescript(vm.editDescript).then(function(response){
            if(response.data.code == 0){
                $state.go('root.businessInteraction.platformDescript.list');
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






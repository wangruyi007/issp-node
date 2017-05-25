var app = angular.module('typeEdit', ['toastr','ipCookie']);
app.controller('typeEditCtrl', function($scope, typeSer,$stateParams,$state,toastr,ipCookie,$location){
    var editData ={id: $stateParams.id};

    //获取ID
    typeSer.getEditTypeById(editData).then(function(response){
        if(response.data.code=='0'){
            $scope.editTypeBasic = response.data.data;
        }else if (response.data.code==403){
            toastr.error( "请登录用户", '温馨提示');
        }
    });
    //编辑点击提交
    $scope.typeEditFun = function(){
        var vm = $scope;
        typeSer.editType(vm.editTypeBasic).then(function(response){
            if(response.data.code == 0){
                $state.go('root.supplier.type.list');
                toastr.success( "编辑成功", '温馨提示');
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






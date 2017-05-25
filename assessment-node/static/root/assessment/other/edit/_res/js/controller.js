var app = angular.module('otherEdit', ['toastr','ipCookie']);
app.controller('otherEditCtrl', function($scope, otherSer,$stateParams,$state,toastr,ipCookie,$location){
    otherSer.allOtherProjects().then(function(response){
        if(response.data.code == 0){
            $scope.otherData = response.data.data;
        }
    });
    var otData ={id: $stateParams.id};
    //获取ID
    otherSer.findOtherId(otData).then(function(response){
        if(response.data.code=='0'){
            $scope.editInfo = response.data.data;
        }else if (response.data.code==403){
            toastr.error( "请登录用户", '温馨提示');
        }
    });
    //编辑点击提交
    $scope.otherEditFun = function(){
        var vm = $scope;
        otherSer.editOther(vm.editInfo).then(function(response){
            if(response.data.code == 0){
                $state.go('root.assessment.other.list');
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






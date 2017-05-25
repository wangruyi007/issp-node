var app = angular.module('handleEdit', ['toastr']);
app.controller('handleEditCtrl', function($scope, handleSer,$stateParams,$state,toastr,ipCookie,$location){
    handleSer.allHandProjects().then(function(response){
        if(response.data.code == 0){
            $scope.proData = response.data.data;
        }
    });
    var handData ={id: $stateParams.id};
    //获取ID
    handleSer.findHandId(handData).then(function(response){
        if(response.data.code=='0'){
            $scope.editInfo = response.data.data;
        }else if (response.data.code==403){
            toastr.error( "请登录用户", '温馨提示');
        }

    });
    //编辑点击提交
    $scope.handEditFun = function(){
        var vm = $scope;
        vm.editInfo.disposeStartTime = angular.element('.disposeStartTime').val();
        vm.editInfo.disposeEndTime = angular.element('.disposeEndTime').val();
        handleSer.editHand(vm.editInfo).then(function(response){
            if(response.data.code == 0){
                $state.go('root.assessment.handle.list');
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






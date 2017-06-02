var app = angular.module('cooperationEdit', ['toastr','ipCookie']);
app.controller('cooperationEditCtrl', function($scope, basicinfoSer,$state,toastr,$stateParams,ipCookie,$location){
    var contId = {id : $stateParams.suId};
    //获取值
    basicinfoSer.editCooperationById(contId).then(function(response){
        if(response.data.code==0){
            $scope.editInfo = response.data.data;
        }
    });
    $scope.cooperationEditFun = function(){
        var vm = $scope;
        vm.editInfo.cooperationTime = angular.element('.cooperationTime').val();
        vm.editInfo.cooperationTerm = angular.element('.cooperationTerm').val();
        basicinfoSer.editCooperation(vm.editInfo).then(function(response){
            if(response.data.code == 0){
                $state.go('root.supplier.basicinfo.list');
                toastr.success( "已成功编辑", '温馨提示');
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
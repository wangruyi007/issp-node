var app = angular.module('basicInfoShare', ['toastr','ipCookie']);
app.controller('basicInfoShareCtrl', function($scope, basicInfoSer,$stateParams,$state,toastr,ipCookie,$location){
    var basicData ={id: $stateParams.id};
    //获取ID
    basicInfoSer.findInfoId(basicData).then(function(response){
        if(response.data.code=='0'){
            $scope.shareInfo = response.data.data;
        }
    });
    //编辑点击提交
    $scope.basicInfoEditFun = function(){
        var vm = $scope;
        vm.shareInfo.taxDate = angular.element('.taxDate').val();
        basicInfoSer.editShareBasicInfo(vm.shareInfo).then(function(response){
            if(response.data.code == 0){
                $state.go('root.payable.basicInfo.list');
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






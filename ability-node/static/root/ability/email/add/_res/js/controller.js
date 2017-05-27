var app = angular.module('emailAdd', ['toastr','ipCookie']);
app.controller('emailAddCtrl', function($scope, emailSer,$state,toastr,ipCookie,$location){
    $scope.myFunc = function() {
        var type={type:$scope.type}
        emailSer.listNameType(type).then(function(response){
            if(response.data.code == 0){
                $scope.companyNames = response.data.data;
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }
        });
    };
    //添加个人能力
    $scope.emailAddFun = function(){
        var vm = $scope;
        var data = {
            type: vm.type,
            companyOrNames: vm.comNames,
            remark: vm.remark,
            sendNum: vm.sendNum,
            collectSendUnit:vm.collectSendUnit,
            collectUnit: vm.collectUnit,
            status: vm.status,
            sendObjectList: vm.sendObjectList,
           };

        emailSer.addEmail(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.ability.email.list');
                toastr.success( vm.type+"已成功添加", '温馨提示');
            }else if (response.data.code == 403||response.data.code==401) {
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






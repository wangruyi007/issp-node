var app = angular.module('informationAdd', ['toastr','ipCookie']);
app.controller('informationAddCtrl', function($scope, informationSer,$state,toastr,ipCookie,$location){
    //添加公司能力
    $scope.informationAddFun = function(){
        var vm = $scope;
        $scope.add.infoCollectionDate=angular.element('.infoCollectionDate').val();
        $scope.add.startTime=angular.element('.startTime').val();
        $scope.add.importantPoint=angular.element('.importantPoint').val();
        $scope.add.endTime=angular.element('.endTime').val();
        informationSer.addInformation(vm.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.marketinform.information.list');
                toastr.success("已成功添加", '温馨提示');
            }else if (response.data.code == 403||response.data.code == 401) {
                toastr.error( "请登录用户,3秒后跳至登陆页面", '温馨提示');
                var absurl = $location.absUrl();
                ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes',domain:'issp.bjike.com' })
                setTimeout(function(){
                    window.location.href='http://localhost/login'
                },3000)
            }else if(response.data.code==1){
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});






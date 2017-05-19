var app = angular.module('levelEdit', ['toastr','ipCookie']);
app.controller('levelEditCtrl', function($scope, levelSer, $state, toastr, $stateParams,ipCookie,$location){

    var nameLevel = {name : $stateParams.nameLevel};


    levelSer.getCustomerLevel(nameLevel).then(function(response){

        $scope.levelInfo = response.data.data
    })
    $scope.editLevel = function(){
        var vm = $scope;
        var data = {
            id:vm.levelInfo.id,
            name : vm.levelInfo.name,
            remark : vm.levelInfo.remark
        }
        levelSer.editLevel(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.customer.level.list');
                toastr.success("已编辑成功", '温馨提示');
            }else if(response.data.code==403||response.data.code==401){
                toastr.error( "请登录用户,2秒后跳至登陆页面", '温馨提示');
                var absurl = $location.absUrl();
                ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes' });
                setTimeout(function(){
                    window.location.href='http://localhost/login'
                },2000)
            }
        })
    };


});






var app = angular.module('basicinfoEdit', ['toastr','ipCookie']);
app.controller('basicinfoEditCtrl', function($scope, basicinfoSer,$stateParams,$state,toastr,ipCookie,$location){
    var editData ={id: $stateParams.id};

    //获取ID
    basicinfoSer.editBasicInfoById(editData).then(function(response){
        if(response.data.code=='0'){
            $scope.editBasicInfo = response.data.data;
        }
    });
    //编辑点击提交
    $scope.basicInfoEditFun = function(){
        var vm = $scope;
        basicinfoSer.basicInfoEdit(vm.editBasicInfo).then(function(response){
               if(response.data.code == 0){
                $state.go('root.supplier.basicinfo.list');
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






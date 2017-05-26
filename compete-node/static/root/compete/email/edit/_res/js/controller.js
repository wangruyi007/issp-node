var app = angular.module('emailEdit', ['toastr','ipCookie']);
app.controller('emailEditCtrl', function($scope, emailSer,$state,toastr,$stateParams,$location,ipCookie){
    var emaiId = {id : $stateParams.id};
    //获取值
    emailSer.getFourById(emaiId).then(function(response){
        if(response.data.code==0){
            $scope.editInfo = response.data.data;
        }
    });
    //提交
    $scope.emaiIdEditFun = function(){
        var vm = $scope;
        var data = $scope.editInfo;
        emailSer.editEmail(data).then(function(response){
            console.log(response);
            if(response.data.code == 0){
                $state.go('root.compete.email.list');
                toastr.success( "已成功编辑", '温馨提示');
            }else if(response.data.code==403  || response.data.code==401){
                toastr.error( "请登录用户,3秒后跳至登陆页面", '温馨提示');
                var absurl = $location.absUrl();
                ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes',domain:'issp.bjike.com' });
                setTimeout(function(){
                    window.location.href='http://localhost/login'
                },3000)
            }
        });
    };
    //双击删除对象
    $scope.dbOject = function(){
       $scope.editInfo.sendUser = " ";
    }
});
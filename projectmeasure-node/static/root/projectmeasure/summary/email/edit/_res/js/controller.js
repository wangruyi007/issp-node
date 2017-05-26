/**
 * Created by ike on 2017/5/4.
 */
var app = angular.module('summeryEdit', ['toastr','ipCookie']);
app.controller('EditCtrl', function($scope, emailSer,$state,toastr,$stateParams,ipCookie,$location){
    var emaiId = {id : $stateParams.id};
    //获取值
    
    emailSer.getFourById(emaiId).then(function(response){
        if(response.data.code==0){
            $scope.data = response.data.data;
        }
    });
    //提交
    $scope.emailEditFun = function(){
        var vm = $scope;
        var data = $scope.data;
        emailSer.editEmail(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.projectmeasure.summary.email.list');
                toastr.success( "已成功编辑", '温馨提示');
            }else if(response.data.code==403  || response.data.code==401){
                toastr.error( "请登录用户,3秒后跳至登陆页面", '温馨提示');
                var absurl = $location.absUrl();
                ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes',domain:'issp.bjike.com' });
                setTimeout(function(){
                    window.location.href='http://localhost/login'
                },3000)
            }
        }) 
    };
    
});


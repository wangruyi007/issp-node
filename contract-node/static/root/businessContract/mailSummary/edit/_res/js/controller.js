var app = angular.module('mailSummaryEdit', ['toastr','ipCookie']);
app.controller('mailSummaryEditCtrl', function($scope, emailSer,$stateParams,$state,toastr,$location,ipCookie){
    var emailData ={id: $stateParams.id};

    //获取ID
    emailSer.findEmailId(emailData).then(function(response){

        if(response.data.code=='0'){
            $scope.editMail = response.data.data;
        }else if (response.data.code==403){
            toastr.error( "请登录用户", '温馨提示');
        }

    });


    //编辑点击提交
    $scope.emailEditFun = function(){
        var vm = $scope;
        emailSer.editEmail(vm.editMail).then(function(response){
            console.log(response);
            if(response.data.code == 0){
                $state.go('root.businessContract.mailSummary.list');
                toastr.success( "编辑成功", '温馨提示');
            }else if(response.data.code==403||response.data.code==401){
                toastr.error( "请登录用户,3秒后跳至登陆页面", '温馨提示');
                var absurl = $location.absUrl();
                ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes' });
                setTimeout(function(){
                    window.location.href='http://localhost/login'
                },3000)
            }
        });

    };
});






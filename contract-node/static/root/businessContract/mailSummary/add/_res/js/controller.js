var app = angular.module('mailSummaryAdd', ['toastr','ipCookie']);
app.controller('mailSummaryAddCtrl', function($scope, emailSer,$state,toastr,$location,ipCookie){

    //添加
    $scope.EmailAddFun = function(){
        var vm = $scope;
        emailSer.addEmail(vm.emails).then(function(response){
            console.log(response)
            if(response.data.code == 0){
                $state.go('root.businessContract.mailSummary.list');
                toastr.success(vm.emails.type+"已成功添加", '温馨提示');
            }else if(response.data.code==403||response.data.code==401){
                toastr.error( "请登录用户,3秒后跳至登陆页面", '温馨提示');
                var absurl = $location.absUrl();
                ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes',domain:'issp.bjike.com' });
                setTimeout(function(){
                    window.location.href='http://localhost/login'
                },3000)
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });

    };
//双击删除对象
    $scope.dbsend = function(){
        $scope.emails.sendObjectList = " ";
    }
});





var app = angular.module('courseCollectAdd', ['toastr','ipCookie']);
app.controller('courseCollectAddCtrl', function($scope, courseCollectSer,$state,toastr,ipCookie,$location){
    //添加个人能力
    $scope.courseCollectAddFun = function(){
        var d =  angular.element('.time').val();
        var data = $scope.data;
        data.courseCollectDate=d;
        //只取两位小数
        $scope.data.income = Number($scope.income).toFixed(2);
        $scope.data.expenditure = Number($scope.expenditure).toFixed(2);
        //后台没写选项中的例子
        courseCollectSer.subjectsAudit(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.compete.courseCollect.list');
                toastr.success( "公司已成功添加", '温馨提示');
            }else if(response.data.code==403||response.data.code==401){

                toastr.error( "请登录用户,2秒后跳至登陆页面", '温馨提示');
                var absurl = $location.absUrl();
                ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes' });
                setTimeout(function(){
                    window.location.href='http://localhost/login'
                },2000)
            }
        });

    };
});






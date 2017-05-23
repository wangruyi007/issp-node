var app = angular.module('costAdd', ['toastr']);
app.controller('costAddCtrl', function($scope,$state,toastr,costSer,ipCookie,$location){
    costSer.allGrade().then(function(response){
        if(response.data.code == 0){
            $scope.proData = response.data.data;
        }
    });
    $scope.costAddFun = function(){
        costSer.addCost($scope.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.project.cost.list');
                toastr.success("已成功添加", '温馨提示');
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






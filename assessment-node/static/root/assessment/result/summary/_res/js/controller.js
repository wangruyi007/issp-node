var app = angular.module('resultSummary', ['toastr','ipCookie']);
app.controller('resultSummaryCtrl', function($scope, resultSer,toastr,ipCookie,$location){
    //获取项目
    resultSer.listResultProjects().then(function(response){
        if(response.data.code == 0){
            $scope.prodata = response.data.data;
        }
    });
    //查询所有地区
    resultSer.listResultArea().then(function(response){
        if(response.data.code == 0){
            $scope.areadata = response.data.data;
        }
    });
        $scope.myFunc = function () {
            var listData = {
                proData: $scope.project,
                proArea: $scope.area
            };
            resultSer.ectSummary(listData).then(function (response) {
                if (response.data.code == 0) {
                    $scope.summaryLists = response.data.data;
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






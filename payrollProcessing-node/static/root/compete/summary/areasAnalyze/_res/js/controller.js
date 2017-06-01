var app = angular.module('areasAnalyze', ['toastr','ipCookie']);
app.controller('areasAnalyzeCtrl', function($scope, summarySer,toastr,$location,ipCookie){

    $scope.showed=true;
    // 获取所有地区
    summarySer.areasList().then(function(response){
        if(response.data.code == 0){
            $scope.areas = response.data.data;
        } else if(response.data.code == 403){
            toastr.error("请登录用户", '温馨提示');
        }
    });
    $scope.collect = function(){
        var vm = $scope;
        vm.sum={
            year:angular.element('.year').val(),
            month:angular.element('.month').val(),
            area:vm.area
        };
        summarySer.areasAnalyze(vm.sum).then(function(response){
            if(response.data.code == 0){
                $scope.summaryLists = response.data.data;
            }else if(response.data.code==403||response.data.code==401){
                toastr.error( "请登录用户,2秒后跳至登陆页面", '温馨提示');
                var absurl = $location.absUrl();
                ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes' });
                setTimeout(function(){
                    window.location.href='http://localhost/login'
                },2000)
            }else{
                toastr.error(response.data.msg,'温馨提示');
            }
        })
    };
  
});





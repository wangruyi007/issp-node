var app = angular.module('categorySummary', ['toastr','ipCookie']);
app.controller('categorySummaryCtrl', function($scope, outsourcingSer,toastr,$location,ipCookie){

    $scope.showed=true;

    $scope.collect = function(){
        var vm = $scope;
        vm.sum={
            startTime:angular.element('.start').val(),
            endTime:angular.element('.end').val(),
            type:vm.type
        };

        outsourcingSer.categorySummary(vm.sum).then(function(response){
            if(response.data.code == 0){
                if( vm.sum.type == undefined || vm.sum.type == ''){
                    $scope.showed=true
                }else {
                    $scope.showed=false
                }
                $scope.summaryLists = response.data.data;
            }else if(response.data.code==403||response.data.code==401){
                toastr.error( "请登录用户,3秒后跳至登陆页面", '温馨提示');
                var absurl = $location.absUrl();
                ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes' });
                setTimeout(function(){
                    window.location.href='http://localhost/login'
                },3000)
            }
        })
    };

});





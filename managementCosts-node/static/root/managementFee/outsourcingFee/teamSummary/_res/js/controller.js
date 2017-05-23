var app = angular.module('teamSummary', ['toastr','ipCookie']);
app.controller('teamSummaryCtrl', function($scope, outsourcingSer,toastr,$location,ipCookie){

    $scope.showed=true;
    // 获取项目组
    outsourcingSer.getTeam().then(function(response){
        if(response.data.code == 0){
            $scope.groups = response.data.data;
        } else if(response.data.code == 403){
            toastr.error("请登录用户", '温馨提示');
        }
    });
    $scope.collect = function(){
        var vm = $scope;
        vm.sum={
            startTime:angular.element('.start').val(),
            endTime:angular.element('.end').val(),
            projectGroup:vm.projectGroup
        };
        outsourcingSer.teamSummary(vm.sum).then(function(response){
            if(response.data.code == 0){
                if( vm.sum.projectGroup == undefined || vm.sum.projectGroup == ''){
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





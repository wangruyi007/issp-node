var app = angular.module('projectNameSummary', ['toastr','ipCookie']);
app.controller('projectNameSummaryCtrl', function($scope, outsourcingSer,toastr,$location,ipCookie){

    $scope.showed=true;
    // 获取项目名称
    outsourcingSer.getOutProject().then(function(response){
        if(response.data.code == 0){
            $scope.names = response.data.data;
        } else if(response.data.code == 403){
            toastr.error("请登录用户", '温馨提示');
        }
    });
    $scope.collect = function(){
        var vm = $scope;
        vm.sum={
            startTime:angular.element('.start').val(),
            endTime:angular.element('.end').val(),
            project:vm.project
        };
        outsourcingSer.projectSummary(vm.sum).then(function(response){
            if(response.data.code == 0){
                if( vm.sum.project == undefined || vm.sum.project == ''){
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





var app = angular.module('weekPlanAdd', ['toastr','ipCookie']);
app.controller('weekPlanAddCtrl', function($scope, weekPlanSer,$state,toastr,$location,ipCookie){

    weekPlanSer.getWeekChoice().then(function(response){
        if(response.data.code == 0){
            $scope.weekGetmonth = response.data.data
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }
    });

    //添加
    $scope.weekPlanAddFun = function(){
        var vm = $scope;
        vm.week.startCycle = angular.element('.addStartCycle').val();
        vm.week.endCycle = angular.element('.addEndCycle').val();
        weekPlanSer.addWeekPlan(vm.week).then(function(response){
            if(response.data.code == 0){
                $state.go('root.developProgress.plan.weekPlan.list');
                toastr.success("周计划已成功添加", '温馨提示');
            }else if(response.data.code==403||response.data.code==401){
                toastr.error( "请登录用户,3秒后跳至登陆页面", '温馨提示');
                var absurl = $location.absUrl();
                ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes',domain:'issp.bjike.com' });
                setTimeout(function(){
                    window.location.href='http://user.issp.bjike.com/login'
                },3000)
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});





var app = angular.module('weekPlanEdit', ['toastr','ipCookie']);
app.controller('weekPlanEditCtrl', function($scope, weekPlanSer,$stateParams,$state,toastr,$location,ipCookie){
    var weekData ={weekId: $stateParams.id};

    //周计划id
    weekPlanSer.weekSearch(weekData).then(function(response){
        if(response.data.code == 0){
            $scope.editWeek = response.data.data;
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }

    });

    //周计划编辑
    $scope.weekPlanEditFun = function(){
        var vm = $scope;
        weekPlanSer.editWeekPlan(vm.editWeek).then(function(response){
            if(response.data.code == 0){
                $state.go('root.developProgress.plan.weekPlan.list');
                toastr.success( "编辑成功", '温馨提示');
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






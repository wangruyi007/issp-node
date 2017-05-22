var app = angular.module('demandEdit', ['toastr']);
app.controller('demandEditCtrl', function($scope, demandSer,$stateParams,$state,toastr,ipCookie,$location){
    demandSer.allProjects().then(function(response){
        if(response.data.code == 0){
            $scope.proData = response.data.data;
        }
    });
    var demaData ={id: $stateParams.id};
    //获取ID
    demandSer.findDemandId(demaData).then(function(response){
        if(response.data.code=='0'){
            $scope.editInfo = response.data.data;
        }else if (response.data.code==403){
            toastr.error( "请登录用户", '温馨提示');
        }

    });
    //编辑点击提交
    $scope.demandEditFun = function(){
        var vm = $scope;
        demandSer.editDemand(vm.editInfo).then(function(response){
            if(response.data.code == 0){
                $state.go('root.assessment.demand.list');
                toastr.success( "编辑成功", '温馨提示');
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






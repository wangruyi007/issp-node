var app = angular.module('joprangeEdit', ['toastr','ipCookie']);
app.controller('joprangeEditCtrl', function($scope,$state,$stateParams,toastr,joprangeSer,ipCookie,$location){

    joprangeSer.getDirection().then(function(response){
        if(response.data.code==0){
            $scope.directionList = response.data.data;
        }
    });
    joprangeSer.getProject().then(function(response){
        if(response.data.code==0){
            $scope.projectList = response.data.data;
        }
    });
    joprangeSer.findClassify().then(function(response){
        if(response.data.code==0){
            $scope.classifyList = response.data.data;
        }
    });

    var id={id:$stateParams.id};
    joprangeSer.getJoprange(id).then(function(response){
        if(response.data.code==0){
            $scope.joprangeData=response.data.data;
        }
    });

    // //客户添加
    $scope.joprangeEditFun = function(){
        joprangeSer.editJoprange($scope.joprangeData).then(function(response){
            if(response.data.code == 0){
                $state.go('root.organize.management.joprange.list');
                toastr.success( "客户信息已成功添加", '温馨提示');
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






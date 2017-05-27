var app = angular.module('gradeEdit', ['toastr','ipCookie']);
app.controller('gradeEditCtrl', function($scope,$state,$stateParams,toastr,gradeSer,ipCookie,$location){

    var getId = {id:$stateParams.id};
    gradeSer.getGrade(getId).then(function(response){
        if(response.data.code==0){
            $scope.edit=response.data.data
        }
    });
    $scope.gradeEditFun = function(){
        gradeSer.editGrade($scope.edit).then(function(response){
            if(response.data.code == 0){
                $state.go('root.project.grade.list');
                toastr.success( "已成功添加", '温馨提示');
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






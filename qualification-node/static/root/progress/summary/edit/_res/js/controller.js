var app = angular.module('edit', ['toastr','ipCookie']);
app.controller('editCtrl', function($scope,$state,toastr,summarySer,ipCookie,$location,$stateParams){

    var getId={id:$stateParams.id};
    summarySer.getProgress(getId).then(function(response){
        if(response.data.code==0){
            $scope.edit=response.data.data
        }

    });
    $scope.editFun = function(){
        $scope.edit.attestation=angular.element('.rztime').val();
        $scope.edit.handleTime=angular.element('.starttime').val();
        $scope.edit.endTime=angular.element('.endtime').val();
        summarySer.editProgress($scope.edit).then(function(response){
            if(response.data.code == 0){
                $state.go('root.progress.summary.list');
                toastr.success( $scope.edit.qualifications+"已成功添加", '温馨提示');
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






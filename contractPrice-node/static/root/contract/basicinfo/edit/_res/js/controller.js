var app = angular.module('basicinfoEdit', ['toastr']);
app.controller('basicinfoEditCtrl', function($scope,$state,$stateParams,toastr,basicinfoSer){

    var getId = {id:$stateParams.id};
    basicinfoSer.getBasicinfo(getId).then(function(response){
        if(response.data.code==0){
            $scope.edit=response.data.data
        }
    });
    $scope.basicEditFun = function(){
        $scope.edit.startTime=angular.element('.starttime').val();
        $scope.edit.endTime=angular.element('.endtime').val();
        basicinfoSer.editBasicinfo($scope.edit).then(function(response){
            if(response.data.code == 0){
                $state.go('root.contract.basicinfo.list');
                toastr.success( $scope.edit.area+"已成功添加", '温馨提示');
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }
        });
    };
});






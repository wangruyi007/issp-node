var app = angular.module('gradeEdit', ['toastr']);
app.controller('gradeEditCtrl', function($scope,$state,$stateParams,toastr,gradeSer){

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
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});






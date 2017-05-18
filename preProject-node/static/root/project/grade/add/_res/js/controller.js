var app = angular.module('gradeAdd', ['toastr']);
app.controller('gradeAddCtrl', function($scope,$state,toastr,gradeSer){
    $scope.gradeAddFun = function(){
        gradeSer.addGrade($scope.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.project.grade.list');
                toastr.success( "已成功添加", '温馨提示');
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }
        });
    };
});






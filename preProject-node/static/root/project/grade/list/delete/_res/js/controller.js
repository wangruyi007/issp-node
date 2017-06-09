var app = angular.module('gradeDelete', ['toastr']);
app.controller('gradeDeleteCtrl',function($scope,toastr,$stateParams,$state,gradeSer){
    //删除
    $scope.delYes = function(){
        var data = {
            id :$stateParams.id
        };
        gradeSer.deleteGrade(data).then(function(response){
            if(response.data.code==0){
                toastr.info( "信息已删除", '温馨提示');
                $state.go('root.project.grade.list');
                $scope.deledId = $stateParams.id;
                //向父Ctrl传递事件
                $scope.$emit('deletedId', $scope.deledId);
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        })
    }


});



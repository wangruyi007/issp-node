var app = angular.module('taskEdit', ['toastr']);
app.controller('taskEditCtrl', function($scope, taskSer,$stateParams,$state,toastr){
    var confirmData ={id: $stateParams.id};

    //获取ID
    taskSer.findAssignmentId(confirmData).then(function(response){
        if(response.data.code=='0'){
            $scope.taskEdit = response.data.data;
        }else if (response.data.code==403){
            toastr.error( "请登录用户", '温馨提示');
        }

    });

    //编辑点击提交
    $scope.taskEditFun = function(){
        var vm = $scope;

        taskSer.editAssignment(vm.taskEdit).then(function(response){
            if(response.data.code == 0){
                $state.go('root.projectProcessed.personalTask.list');
                toastr.success( "编辑成功", '温馨提示');
            }else if(response.data.code == 403){
                toastr.error( "请登录用户", '温馨提示');
            }
        });

    };
    //可手填的下拉框
    $scope.changeSelect = function () {
        $scope.taskEdit.handler = $scope.taskEdit.handler1;
    };;

});






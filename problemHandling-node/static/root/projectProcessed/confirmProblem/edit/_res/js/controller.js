var app = angular.module('confirmEdit', ['toastr']);
app.controller('confirmEditCtrl', function($scope, confirmSer,$stateParams,$state,toastr){
    var confirmData ={id: $stateParams.id};

    //获取ID
    confirmSer.findResultId(confirmData).then(function(response){
        if(response.data.code== 0){
            $scope.resultEdit = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }

    });

    //编辑点击提交
    $scope.problemEditFun = function(){
        var vm = $scope;

        confirmSer.editResult(vm.resultEdit).then(function(response){
            if(response.data.code == 0){
                $state.go('root.projectProcessed.confirmProblem.list');
                toastr.success( "编辑成功", '温馨提示');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
    //可手填的下拉框
    $scope.changeSelect = function () {
        $scope.resultEdit.projectType = $scope.resultEdit.projectType1;
    };
    $scope.changeSelect2 = function () {
        $scope.resultEdit.problemObject = $scope.resultEdit.problemObject1;
    };

});






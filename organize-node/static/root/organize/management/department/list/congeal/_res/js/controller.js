var app = angular.module('departmentCongeal', ['toastr']);
app.controller('departmentCongealCtrl',function($scope,toastr,$stateParams,$state,departSer){

    $scope.congealYes = function(){

        var data = {
            id :$stateParams.id
        }
        departSer.congealDepartment(data).then(function(response){
            if(response.data.code==0){
                toastr.info( "信息已冻结", '温馨提示');
                $state.go('root.organize.management.department.list');
                $scope.conId = $stateParams.id;
                //向父Ctrl传递事件
                $scope.$emit('congealId', $scope.conId)
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }
        })
    }


});



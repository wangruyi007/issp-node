var app = angular.module('reflectCongeal', ['toastr']);
app.controller('reflectCongealCtrl',function($scope,toastr,$stateParams,$state,reflectSer){
    //删除
    $scope.congealYes = function(){
            var data = {
                id :$stateParams.id
            }
        reflectSer.congealReflect(data).then(function(response){
                if(response.data.code==0){
                    toastr.info( "信息已冻结", '温馨提示');
                    $state.go('root.organize.management.reflect.list');
                    //向父Ctrl传递事件
                    $scope.$emit('congealId', $stateParams.id);
                    $scope.$emit('changeId', null)
                }else if(response.data.code==403){
                    toastr.error( "请登录用户", '温馨提示');
                }
        })
    }


});



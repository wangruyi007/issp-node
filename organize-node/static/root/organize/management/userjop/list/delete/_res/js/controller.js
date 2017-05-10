var app = angular.module('userjopDelete', ['toastr']);
app.controller('userjopDeleteCtrl',function($scope,toastr,$stateParams,$state,userjopSer){
    //删除
    $scope.delYes = function(){

        var data = {
            id :$stateParams.id
        };

        userjopSer.deleteUserjop(data).then(function(response){
            if(response.data.code==0){
                toastr.info( "信息已删除", '温馨提示');
                $state.go('root.organize.management.userjop.list');
                //向父Ctrl传递事件
                $scope.$emit('deletedId', $stateParams.id);
                $scope.$emit('changeId', null)
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }
        })
    }


});



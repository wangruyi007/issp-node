var app = angular.module('jopdesDelete', ['toastr']);
app.controller('jopdesDeleteCtrl',function($scope,toastr,$stateParams,$state,jopdesSer){
    //删除
    $scope.delYes = function(){

        var data = {
            id :$stateParams.id
        };

        jopdesSer.deleteJopdes(data).then(function(response){
            if(response.data.code==0){
                toastr.info( "信息已删除", '温馨提示');
                $state.go('root.organize.management.jopdes.list');
                $scope.deledId = $stateParams.id;
                //向父Ctrl传递事件
                $scope.$emit('deletedId', $scope.deledId);
                $scope.$emit('changeId', null)
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }
        })
    }


});



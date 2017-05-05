var app = angular.module('postsDelete', ['toastr']);
app.controller('postsDeleteCtrl',function($scope,toastr,$stateParams,$state,postsSer){
    //删除
    $scope.delYes = function(){

        var data = {
            id :$stateParams.id
        };
        postsSer.deletePosts(data).then(function(response){
            if(response.data.code==0){
                toastr.info( "信息已删除", '温馨提示');
                $state.go('root.organize.management.posts.list');
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



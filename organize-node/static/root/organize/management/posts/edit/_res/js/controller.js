var app = angular.module('postsEdit', ['toastr']);
app.controller('postsEditCtrl', function($scope,$state,toastr,postsSer,$stateParams){

    //部门
    postsSer.getDepartList().then(function(response){

        if(response.data.code==0){
            $scope.departments = response.data.data
        }
    });
    //层级
    postsSer.getArrangement().then(function(response){
        if(response.data.code==0){
            $scope.arrangements = response.data.data
        }
    });
    //模块
    postsSer.getModule().then(function(response){
        if(response.data.code==0){
            $scope.modules = response.data.data
        }
    });
    var getIdList={id:$stateParams.id};
    postsSer.getPosts(getIdList).then(function(response){
        if(response.data.code==0){
            $scope.postsData = response.data.data
        }
    });

    $scope.postsEditFun=function(){
        $scope.postsData.id=$stateParams.id;
        postsSer.editPosts($scope.postsData).then(function(response){
            if(response.data.code==0){
                if(!response.data.data){
                    toastr.info(response.data.msg , '温馨提示');
                }else{
                    $state.go('root.organize.management.posts.list');
                    toastr.success( $scope.postsData.serialNumber+"已成功编辑", '温馨提示');
                }
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }
        });
    }
});






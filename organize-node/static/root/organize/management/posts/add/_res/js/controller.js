var app = angular.module('postsAdd', ['toastr']);
app.controller('postsAddCtrl', function($scope,$state,toastr,postsSer){
    //部门

    postsSer.getDepartList(['id','department']).then(function(response){

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

    $scope.postsAddFun = function(){
        var vm = $scope;
        var data={
            serialNumber:vm.serialNumber,
            departmentId:vm.departmentId,
            arrangementId:vm.arrangementId,
            pool:vm.pool,
            moduleId:vm.moduleId,
            position:vm.position,
            staff:vm.staff,
            current:vm.current
        };
        postsSer.addPosts(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.organize.management.posts.list');
                toastr.success( vm.serialNumber+"已成功添加", '温馨提示');
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }

        })
    }
});






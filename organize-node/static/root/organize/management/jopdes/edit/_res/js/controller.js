var app = angular.module('jopdesEdit', ['toastr','angularjs-dropdown-multiselect']);
app.controller('jopdesEditCtrl', function($scope,$state,toastr,jopdesSer){

    $scope.jopdesEditFun=function(){
        $scope.postsData.id=$stateParams.id;
        jopdesSer.editPosts($scope.postsData).then(function(response){
            if(response.data.code==0){
                if(!response.data.data){
                    toastr.info(response.data.msg , '温馨提示');
                }else{
                    $state.go('root.organize.management.jopdes.list');
                    toastr.success("已成功编辑", '温馨提示');
                }
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }
        });
    }
});






var app = angular.module('coverIdeaZ', ['toastr']);
app.controller('coverIdeaZCtrl', function($scope, coverSer,$stateParams,$state,toastr){
    var infoData ={id: $stateParams.id};
    $scope.showed=true
    coverSer.gitLevel().then(function(response){
        if(response.data.code == 0){
            $scope.applyLevelIds = response.data.data;
        }
    });
    //获取ID
    coverSer.coverId(infoData).then(function(response){
        if(response.data.code == 0){
            $scope.cover = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }

    });

    //编辑点击提交
    $scope.coverEditFun = function(){
        var vm = $scope;
        vm.cover.pass = angular.element('.ye').val();
        vm.cover.applyLevelId = angular.element('.le').val();
        coverSer.coverIdeaZ(vm.cover).then(function(response){
            if(response.data.code == 0){
                $state.go('root.rotation.cover.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});






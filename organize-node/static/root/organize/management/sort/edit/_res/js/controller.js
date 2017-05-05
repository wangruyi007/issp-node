var app = angular.module('sortEdit', ['toastr']);
app.controller('sortEditCtrl', function($scope,$state,toastr,sortSer,$stateParams){

    var sortData ={id: $stateParams.id};
    sortSer.getSort(sortData).then(function(response){
        if(response.data.code == 0){
            $scope.editSort = response.data.data
        }
    });

    //提交编辑
    $scope.sortAddFun = function(){
        var vm = $scope;
        sortSer.editSort(vm.editSort).then(function(response){
            if(response.data.code == 0){
                $state.go('root.organize.management.sort.list');
                toastr.success( "已成功编辑", '温馨提示');
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }
        });
    };
});






var app = angular.module('sortAdd', ['toastr']);
app.controller('sortAddCtrl', function($scope,$state,toastr,sortSer){

    $scope.sortAddFun = function(){
        var vm = $scope;
        sortSer.addSort(vm.sort).then(function(response){
            if(response.data.code == 0){
                $state.go('root.organize.management.sort.list');
                toastr.success("已成功添加", '温馨提示');
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }
        });
    };
});






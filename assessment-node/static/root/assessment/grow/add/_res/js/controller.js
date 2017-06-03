var app = angular.module('growAdd', ['toastr']);
app.controller('growAddCtrl', function ($scope, growSer, $state, toastr) {
    growSer.allGrowProjects().then(function(response){
        if(response.data.code == 0){
            $scope.proData = response.data.data;
        }
    });
    //添加
    $scope.growAddFun = function () {
        var vm = $scope;
        growSer.addGrow(vm.add).then(function (response) {
            if (response.data.code == 0) {
                $state.go('root.assessment.grow.list');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});





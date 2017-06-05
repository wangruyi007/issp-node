var app = angular.module('frontlineAdd', ['toastr']);
app.controller('frontlineAddCtrl', function ($scope, frontlineSer, $state, toastr) {
    frontlineSer.allFrontLineProjects().then(function(response){
        if(response.data.code == 0){
            $scope.proData = response.data.data;
        }
    });
    //添加
    $scope.frontLineAddFun = function () {
        var vm = $scope;
        frontlineSer.addFrontLine(vm.add).then(function (response) {
            if (response.data.code == 0) {
                $state.go('root.assessment.frontline.list');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});





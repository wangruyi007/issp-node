var app = angular.module('projectAdd', ['toastr']);
app.controller('projectAddCtrl', function ($scope, projectSer, $state, toastr) {
    projectSer.allProjectPros().then(function(response){
        if(response.data.code == 0){
            $scope.proData = response.data.data;
        }
    });
    //添加
    $scope.proAddFun = function () {
        var vm = $scope;
        projectSer.addProject(vm.add).then(function (response) {
            if (response.data.code == 0) {
                $state.go('root.assessment.project.list');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});





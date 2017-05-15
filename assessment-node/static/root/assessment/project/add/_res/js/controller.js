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
            } else if (response.data.code == 403) {
                toastr.error("请登录用户", '温馨提示');
            }
        });
    };
    //可手填的下拉框
 /*   $scope.changeSelect=function(){
        $scope.add.area = $scope.add.area2;
    };*/
});





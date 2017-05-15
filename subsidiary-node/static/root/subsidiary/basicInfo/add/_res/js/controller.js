var app = angular.module('basicInfoAdd', ['toastr']);
app.controller('basicInfoAddCtrl', function ($scope, basicInfoSer, $state, toastr) {

    //添加
    $scope.basicInfoAddFun = function () {
        var vm = $scope;
        vm.add.date = angular.element('.date').val();
        basicInfoSer.addBasicInfo(vm.add).then(function (response) {
            if (response.data.code == 0) {
                $state.go('root.subsidiary.basicInfo.list');
                toastr.success("已成功添加", '温馨提示');
            } else if (response.data.code == 403) {
                toastr.error("请登录用户", '温馨提示');
            }
        });
    };
    $scope.changeSelect=function(){
        $scope.add.firstSubject = $scope.add.firstSubject2;
    };
    $scope.changeSelect2=function(){
        $scope.add.secondSubject = $scope.add.secondSubject2;
    };
    $scope.changeSelect3=function(){
        $scope.add.thirdSubject = $scope.add.thirdSubject2;
    };
});





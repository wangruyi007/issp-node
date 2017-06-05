var app = angular.module('informationAdd', ['toastr']);
app.controller('informationAddCtrl', function ($scope, informationSer, $state, toastr) {
    informationSer.allInformationProjects().then(function(response){
        if(response.data.code == 0){
            $scope.proData = response.data.data;
        }
    });
    //添加
    $scope.informationAddFun = function () {
        var vm = $scope;
        informationSer.addInformation(vm.add).then(function (response) {
            if (response.data.code == 0) {
                $state.go('root.assessment.information.list');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});





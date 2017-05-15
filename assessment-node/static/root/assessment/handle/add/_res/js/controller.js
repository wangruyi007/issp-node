var app = angular.module('handleAdd', ['toastr']);
app.controller('handleAddCtrl', function ($scope, handleSer, $state, toastr) {
    handleSer.allHandProjects().then(function(response){
          if(response.data.code == 0){
            $scope.proData = response.data.data;
        }
    });
    //添加
    $scope.handleAddFun = function () {
        var vm = $scope;
        vm.add.disposeStartTime = angular.element('.disposeStartTime').val();
        vm.add.disposeEndTime = angular.element('.disposeEndTime').val();
        handleSer.addHand(vm.add).then(function (response) {
            if (response.data.code == 0) {
                $state.go('root.assessment.handle.list');
                toastr.success("已成功添加", '温馨提示');
            } else if (response.data.code == 403) {
                toastr.error("请登录用户", '温馨提示');
            }
        });
    };
    //可手填的下拉框
  /*  $scope.changeSelect=function(){
        $scope.add.area = $scope.add.area2;
    };*/
});





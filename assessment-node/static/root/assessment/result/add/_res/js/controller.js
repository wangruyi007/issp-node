var app = angular.module('resultAdd', ['toastr']);
app.controller('resultAddCtrl', function($scope, resultSer,$state,toastr){
    resultSer.listResultProjects().then(function(response){
        if(response.data.code == 0){
            $scope.proData = response.data.data;
        }
    });
    //查询所有地区
    resultSer.listResultArea().then(function(response){
        if(response.data.code == 0){
            $scope.areaData = response.data.data;
        }
    });

    //添加个人能力
    $scope.emailAddFun = function(){
        var vm = $scope;
       resultSer.addResult(vm.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.assessment.result.list');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});






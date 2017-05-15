var app = angular.module('resultEdit', ['toastr']);
app.controller('resultEditCtrl', function($scope, resultSer,$state,toastr,$stateParams){
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
    var resultId = {id : $stateParams.id};
    //获取值
    resultSer.getEditResultById(resultId).then(function(response){
        if(response.data.code==0){
            $scope.editInfo = response.data.data;
        }
    });
    $scope.resultEditFun = function(){
        var vm = $scope;
        resultSer.editResult(vm.editInfo).then(function(response){
            if(response.data.code == 0){
                $state.go('root.assessment.result.list');
                toastr.success("已成功编辑", '温馨提示');
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }
        });
    };
});
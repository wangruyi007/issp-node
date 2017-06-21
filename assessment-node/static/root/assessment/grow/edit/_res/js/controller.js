var app = angular.module('growEdit', ['toastr']);
app.controller('growEditCtrl', function($scope, growSer,$stateParams,$state,toastr){
    growSer.allGrowProjects().then(function(response){
        if(response.data.code == 0){
            $scope.proData = response.data.data;
        }
    });
    var growData ={id: $stateParams.id};
    //获取ID
    growSer.findGrowId(growData).then(function(response){
        if(response.data.code=='0'){
            $scope.editInfo = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    //编辑点击提交
    $scope.growAddFun = function(){
        var vm = $scope;
        growSer.editGrow(vm.editInfo).then(function(response){
            if(response.data.code == 0){
                $state.go('root.assessment.grow.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
    //可手填的下拉框
});






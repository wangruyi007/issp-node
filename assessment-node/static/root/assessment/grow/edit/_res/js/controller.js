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
        }else if (response.data.code==403){
            toastr.error( "请登录用户", '温馨提示');
        }

    });
    //编辑点击提交
    $scope.basicInfoEditFun = function(){
        var vm = $scope;
        growSer.editGrow(vm.editInfo).then(function(response){
            if(response.data.code == 0){
                $state.go('root.assessment.grow.list');
                toastr.success( "编辑成功", '温馨提示');
            }else if(response.data.code == 403){
                toastr.error( "请登录用户", '温馨提示');
            }
        });
    };
    //可手填的下拉框
/*    $scope.changeSelect=function(){
        $scope.editInfo.area = $scope.editInfo.area2;
    };*/
});






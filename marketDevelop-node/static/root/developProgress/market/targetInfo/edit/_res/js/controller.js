var app = angular.module('targetInfoEdit', ['toastr']);
app.controller('targetInfoEditCtrl', function($scope, targetInfoSer,$stateParams,$state,toastr){
    var targetData ={targetId: $stateParams.id};

    //获取ID
    targetInfoSer.findTargetInfoId(targetData).then(function(response){
        if(response.data.code==0){
            $scope.editTarget = response.data.data;
        }else {
            toastr.error(response.data.msg,'温馨提示')
        }

    });
    //获取业务类型
    targetInfoSer.getType().then(function(response){
        if(response.data.code==0){
            $scope.types = response.data.data;
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    //获取业务方向科目
    targetInfoSer.getCourse().then(function(response){
        if(response.data.code==0){
            $scope.courses = response.data.data;
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }
    });

    //编辑点击提交
    $scope.targetEditFun = function(){
        var vm = $scope;
        targetInfoSer.editTargetInfo(vm.editTarget).then(function(response){
            if(response.data.code == 0){
                $state.go('root.developProgress.market.targetInfo.list');
                toastr.success( "编辑成功", '温馨提示');
            }else {
                toastr.error(response.data.msg,'温馨提示')
            }
        });

    };
});






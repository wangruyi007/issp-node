var app = angular.module('targetInfoEdit', ['toastr']);
app.controller('targetInfoEditCtrl', function($scope, targetInfoSer,$stateParams,$state,toastr){
    var targetData ={targetId: $stateParams.id};

    //获取ID
    targetInfoSer.findTargetInfoId(targetData).then(function(response){
        console.log(response);
        if(response.data.code=='0'){
            $scope.editTarget = response.data.data;
        }else if (response.data.code==403){
            toastr.error( "请登录用户", '温馨提示');
        }

    });


    //编辑点击提交
    $scope.targetEditFun = function(){
        var vm = $scope;
        var data = {
            id:vm.editTarget.id,
            area : vm.editTarget.area,
            type : vm.editTarget.type,
            course : vm.editTarget.course,
            customer_id : vm.editTarget.customer_id,
            remark : vm.editTarget.remark
        };
        console.log(data);
        targetInfoSer.editTargetInfo(data).then(function(response){
            if(response.data.code == 0){
                $scope.menuClass = 'editMenu'
                $state.go('root.developProgress.market.targetInfo.list');
                toastr.success( "编辑成功", '温馨提示');
            }else if(response.data.code == 403){
                toastr.error( "请登录用户", '温馨提示');
            }
        });

    };
});






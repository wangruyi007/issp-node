var app = angular.module('handleEdit', ['toastr']);
app.controller('handleEditCtrl', function($scope, handleSer,$stateParams,$state,toastr){
    handleSer.allHandProjects().then(function(response){
        if(response.data.code == 0){
            $scope.proData = response.data.data;
        }
    });
    var handData ={id: $stateParams.id};
    //获取ID
    handleSer.findHandId(handData).then(function(response){
        if(response.data.code=='0'){
            $scope.editInfo = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    //编辑点击提交
    $scope.handEditFun = function(){
        var vm = $scope;
        vm.editInfo.disposeStartTime = angular.element('.disposeStartTime').val();
        vm.editInfo.disposeEndTime = angular.element('.disposeEndTime').val();
        handleSer.editHand(vm.editInfo).then(function(response){
            if(response.data.code == 0){
                $state.go('root.assessment.handle.list');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});






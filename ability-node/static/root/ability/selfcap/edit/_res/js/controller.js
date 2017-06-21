var app = angular.module('selfcapEdit', ['toastr']);
app.controller('selfcapEditCtrl', function($scope, selfcapSer,$state,toastr,$stateParams){
    var selfcapId = {id : $stateParams.id};
    //获取值
    selfcapSer.getTwoById(selfcapId).then(function(response){
        if(response.data.code==0){
            $scope.editInfo = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    $scope.selfcapEditFun = function(){
        var vm = $scope;
        var data = {
            id:vm.editInfo.id,
            name: vm.editInfo.name,
            capacity: vm.editInfo.capacity,
            selfJobTitle: vm.editInfo.selfJobTitle,
            positionTitle: vm.editInfo.positionTitle,
            workYear: vm.editInfo.workYear,
            selfProject: vm.editInfo.selfProject,
        };
        selfcapSer.editSelfCapAbility(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.ability.selfcap.list');
                toastr.success(vm.editInfo.name+ "已成功编辑", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
    //可手填的下拉框
    $scope.changeSelect=function(){$scope.editInfo.name = $scope.editInfo.name2;};
    $scope.changeSelect2=function(){$scope.editInfo.capacity = $scope.editInfo.capacity2;};
    $scope.changeSelect3=function(){$scope.editInfo.selfJobTitle = $scope.editInfo.selfJobTitle2;};
    $scope.changeSelect4=function(){$scope.editInfo.positionTitle = $scope.editInfo.positionTitle2;};
    $scope.changeSelect5=function(){$scope.editInfo.workYear = $scope.editInfo.workYear2;};
    $scope.changeSelect6=function(){$scope.editInfo.selfProject = $scope.editInfo.selfProject2;};
});
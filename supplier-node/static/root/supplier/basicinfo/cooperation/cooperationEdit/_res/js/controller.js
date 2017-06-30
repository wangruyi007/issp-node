var app = angular.module('cooperationEdit', ['toastr','ipCookie']);
app.controller('cooperationEditCtrl', function($scope, basicinfoSer,$state,toastr,$stateParams,ipCookie,$location){
    var contId = {id : $stateParams.suId};
    //获取值
    basicinfoSer.editCooperationById(contId).then(function(response){
        if(response.data.code==0){
            $scope.editInfo = response.data.data;
        }
    });
    $scope.cooperationEditFun = function(){
        var vm = $scope;
        vm.editInfo.cooperationTime = angular.element('.cooperationTime').val();
        vm.editInfo.cooperationTerm = angular.element('.cooperationTerm').val();
        basicinfoSer.editCooperation(vm.editInfo).then(function(response){
            if(response.data.code == 0){
                $state.go('root.supplier.basicinfo.list[12]');
                toastr.success( "已成功编辑", '温馨提示');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
});
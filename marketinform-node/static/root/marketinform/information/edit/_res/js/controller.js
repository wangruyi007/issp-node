var app = angular.module('informationEdit', ['toastr']);
app.controller('informationEditCtrl', function($scope, informationSer,$state,toastr,$stateParams){
    var informationId = {id : $stateParams.id};
    //获取值
    informationSer.getInformationById(informationId).then(function(response){
        if(response.data.code==0){
            $scope.editInfo = response.data.data;
        }
    });
    $scope.informationEditFun = function(){
        var vm = $scope;
        $scope.editInfo.infoCollectionDate=angular.element('.infoCollectionDate').val();
        $scope.editInfo.startTime=angular.element('.startTime').val();
        $scope.editInfo.importantPoint=angular.element('.importantPoint').val();
        $scope.editInfo.endTime=angular.element('.endTime').val();
        informationSer.editInformation(vm.editInfo).then(function(response){
            if(response.data.code == 0){
                $state.go('root.marketinform.information.list');
                toastr.success( "已成功编辑", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});
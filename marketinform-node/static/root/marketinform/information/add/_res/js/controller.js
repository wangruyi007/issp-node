var app = angular.module('informationAdd', ['toastr']);
app.controller('informationAddCtrl', function($scope, informationSer,$state,toastr){
    //添加公司能力
    $scope.informationAddFun = function(){
        var vm = $scope;
        $scope.add.infoCollectionDate=angular.element('.infoCollectionDate').val();
        $scope.add.startTime=angular.element('.startTime').val();
        $scope.add.importantPoint=angular.element('.importantPoint').val();
        $scope.add.endTime=angular.element('.endTime').val();
        informationSer.addInformation(vm.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.marketinform.information.list');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});






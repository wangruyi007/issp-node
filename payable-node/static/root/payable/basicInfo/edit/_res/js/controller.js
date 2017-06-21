var app = angular.module('basicInfoEdit', ['toastr']);
app.controller('basicInfoEditCtrl', function($scope, basicInfoSer,$stateParams,$state,toastr){
    var basicData ={id: $stateParams.id};

    //获取ID
    basicInfoSer.findInfoId(basicData).then(function(response){
        if(response.data.code=='0'){
            $scope.editInfo = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    //编辑点击提交
    $scope.basicInfoEditFun = function(){
        var vm = $scope;
        vm.editInfo.taxDate = angular.element('.taxDate').val();
        basicInfoSer.editBasicInfo(vm.editInfo).then(function(response){
              if(response.data.code == 0){
                $state.go('root.payable.basicInfo.list');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});






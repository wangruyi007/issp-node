var app = angular.module('basicInfoShare', ['toastr']);
app.controller('basicInfoShareCtrl', function($scope, basicInfoSer,$stateParams,$state,toastr){
    var basicData ={id: $stateParams.id};
    //获取ID
    basicInfoSer.findInfoId(basicData).then(function(response){
        if(response.data.code=='0'){
            $scope.shareInfo = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    //编辑点击提交
    $scope.shareEditFun = function(){
        var vm = $scope;
        var data={
                id:vm.shareInfo.id,
                project:vm.project,
                splitRate:vm.splitRate
        };
        basicInfoSer.editShareBasicInfo(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.payable.basicInfo.list');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});






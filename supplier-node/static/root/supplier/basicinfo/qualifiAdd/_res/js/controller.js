var app = angular.module('qualifiAdd', ['toastr','ipCookie']);
app.controller('qualifiAddCtrl', function($scope, basicinfoSer,$state,toastr,$stateParams,ipCookie,$location){
    var rewardId = {id : $stateParams.id};
    //获取值
    basicinfoSer.editBasicInfoById(rewardId).then(function(response){
        if(response.data.code==0){
            $scope.peditInfo = response.data.data;
        }
    });
    //添加
    $scope.qualifiAddFun= function(){
        var vm = $scope;
        var data = {
            id:vm.peditInfo.id,
            informationId:vm.peditInfo.informationId,
            serialNumber:vm.peditInfo.serialNumber2,
            name: vm.peditInfo.name2,
            certificateNumber:vm.peditInfo.certificateNumber2,
            validityPeriod:vm.peditInfo.validityPeriod2,
            promulgate:vm.peditInfo.promulgate2,
            aptitude:vm.peditInfo.aptitude2,
            remark:vm.peditInfo.remark2
        };
        basicinfoSer.qualificationAdd(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.supplier.basicinfo.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
});





var app = angular.module('contactAdd', ['toastr','ipCookie']);
app.controller('contactAddCtrl', function($scope, basicinfoSer,$state,toastr,$stateParams,ipCookie,$location){
    var contId = {id : $stateParams.id};
    //获取值
    basicinfoSer.editBasicInfoById(contId).then(function(response){
        if(response.data.code==0){
            $scope.pAddInfo = response.data.data;
        }
    });
    //添加
    $scope.contAddFun= function(){
        var vm = $scope;
        var data = {
            id:vm.pAddInfo.id,
            informationId:vm.pAddInfo.informationId,
            contacts:vm.pAddInfo.contacts2,
            duties: vm.pAddInfo.duties2,
            telephone:vm.pAddInfo.telephone2,
            fax:vm.pAddInfo.fax2,
        };
        basicinfoSer.contactAdd(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.supplier.basicinfo.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
});





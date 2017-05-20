var app = angular.module('cooperationAdd', ['toastr']);
app.controller('cooperationAddCtrl', function($scope, basicinfoSer,$state,toastr,$stateParams){
    var contId = {id : $stateParams.id};
    //获取值
    basicinfoSer.editBasicInfoById(contId).then(function(response){
        if(response.data.code==0){
            $scope.pAddInfo = response.data.data;
        }
    });
    //添加
    $scope.cooperationAddFun= function(){
        var vm = $scope;
        var data = {
            id:vm.pAddInfo.id,
            informationId:vm.pAddInfo.informationId,
            name:vm.pAddInfo.name2,
            product: vm.pAddInfo.product2,
            cooperationTime:vm.pAddInfo.cooperationTime2,
            cooperationTerm:vm.pAddInfo.cooperationTerm2,
        };
        basicinfoSer.cooperationAdd(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.supplier.basicinfo.list');
                toastr.success("已成功添加", '温馨提示');
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }
        });
    };
});





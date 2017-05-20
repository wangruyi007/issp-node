/**
 * Created by ike on 2017/5/4.
 */
var app = angular.module('cooperationEdit', ['toastr']);
app.controller('cooperationEditCtrl', function($scope, basicinfoSer,$state,toastr,$stateParams){
    var contId = {id : $stateParams.suId};
    //获取值
    basicinfoSer.editCooperationById(contId).then(function(response){
        if(response.data.code==0){
            $scope.editInfo = response.data.data;
        }
    });
    $scope.cooperationEditFun = function(){
        var vm = $scope;
        basicinfoSer.editCooperation(vm.editInfo).then(function(response){
            if(response.data.code == 0){
                $state.go('root.supplier.basicinfo.list');
                toastr.success( "已成功编辑", '温馨提示');
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }
        });
    };
});
/**
 * Created by ike on 2017/4/20.
 */
/**
 * Created by ike on 2017/4/18.
 */
var app = angular.module('contactEdit', ['toastr']);
app.controller('contactEditCtrl', function($scope, basicinfoSer,$state,toastr,$stateParams){
    var contId = {id : $stateParams.suId};
    //获取值
    basicinfoSer.editContactById(contId).then(function(response){
        if(response.data.code==0){
            $scope.editInfo = response.data.data;
        }
    });
    $scope.contEditFun = function(){
        var vm = $scope;
        basicinfoSer.editContact(vm.editInfo).then(function(response){
            if(response.data.code == 0){
                $state.go('root.supplier.basicinfo.list');
                toastr.success( "已成功添加", '温馨提示');
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }
        });
    };
});
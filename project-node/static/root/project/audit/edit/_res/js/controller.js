/**
 * Created by ike on 2017/4/18.
 */
var app = angular.module('auditEdit', ['toastr']);
app.controller('auditEditCtrl', function($scope, auditSer,$state,toastr,$stateParams){
    var auditId = {id : $stateParams.id};
    //获取值
    auditSer.getAuditById(auditId).then(function(response){
        if(response.data.code==0){
            $scope.editInfo = response.data.data;
        }
    });
    $scope. auditProjectEditFun = function(){
        var vm = $scope;
        auditSer.editAudit(vm.editInfo).then(function(response){
            if(response.data.code == 0){
                $state.go('root.project.audit.list');
                toastr.success( "已成功编辑", '温馨提示');
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }
        });
    };
});
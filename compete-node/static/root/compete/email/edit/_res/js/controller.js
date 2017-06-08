var app = angular.module('emailEdit', ['toastr']);
app.controller('emailEditCtrl', function($scope, emailSer,$state,toastr,$stateParams){
    var emaiId = {id : $stateParams.id};
    //获取值
    emailSer.getFourById(emaiId).then(function(response){
        if(response.data.code==0){
            $scope.editInfo = response.data.data;
        }
    });
    //提交
    $scope.emaiIdEditFun = function(){
        var vm = $scope;
        var data = $scope.editInfo;
        emailSer.editEmail(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.compete.email.list');
                toastr.success( "已成功编辑", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
    //双击删除对象
    $scope.dbOject = function(){
       $scope.editInfo.sendUser = " ";
    }
});
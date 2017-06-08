var app = angular.module('summeryEdit', ['toastr']);
app.controller('EditCtrl', function($scope, emailSer,$state,toastr,$stateParams){
    var emaiId = {id : $stateParams.id};
    //获取值
    
    emailSer.getFourById(emaiId).then(function(response){
        if(response.data.code==0){
            $scope.data = response.data.data;
        }
    });
    //提交
    $scope.emailEditFun = function(){
        var vm = $scope;
        var data = $scope.data;
        emailSer.editEmail(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.projectmeasure.summary.email.list');
                toastr.success( "已成功编辑", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        }) 
    };
    
});


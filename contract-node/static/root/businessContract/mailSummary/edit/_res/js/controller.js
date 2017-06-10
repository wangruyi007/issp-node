var app = angular.module('mailSummaryEdit', ['toastr']);
app.controller('mailSummaryEditCtrl', function($scope, emailSer,$stateParams,$state,toastr){
    var emailData ={id: $stateParams.id};

    //获取ID
    emailSer.findEmailId(emailData).then(function(response){

        if(response.data.code==0){
            $scope.editMail = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }

    });


    //编辑点击提交
    $scope.emailEditFun = function(){
        var vm = $scope;
        emailSer.editEmail(vm.editMail).then(function(response){
            if(response.data.code == 0){
                $state.go('root.businessContract.mailSummary.list');
                toastr.success( "编辑成功", '温馨提示');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});






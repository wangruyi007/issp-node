var app = angular.module('mailSummaryAdd', ['toastr']);
app.controller('mailSummaryAddCtrl', function($scope, emailSer,$state,toastr){

    //添加
    $scope.EmailAddFun = function(){
        var vm = $scope;
        emailSer.addEmail(vm.emails).then(function(response){
            if(response.data.code == 0){
                $state.go('root.businessContract.mailSummary.list');
                toastr.success(vm.emails.type+"已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });

    };
//双击删除对象
    $scope.dbsend = function(){
        $scope.emails.sendObjectList = " ";
    }
});





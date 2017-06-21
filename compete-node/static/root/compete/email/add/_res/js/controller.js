var app = angular.module('emailAdd', ['toastr']);
app.controller('emailAddCtrl', function($scope, emailSer,$state,toastr){

    $scope.myFunc = function() {
        var type={type:$scope.type}
        emailSer.listNameType(type).then(function(response){
            if(response.data.code == 0){
                $scope.companyNames = response.data.data;
            }else if(response.data.code==403){
                toastr.error( response.data.msg , '温馨提示');
            }
        });
    };


    //添加个人能力
    $scope.emailAddFun = function(){
        var vm = $scope;
        var data = $scope.data;
        emailSer.addEmail(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.compete.email.list');
                toastr.success( "竞争对手已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
    //可手填的下拉框
    $scope.changeSelect=function(){
        $scope.addprofessionAuthen = $scope.addprofessionAuthen2;
    };
    $scope.changeSelect2=function(){
        $scope.addmanageAuthen = $scope.addmanageAuthen2;
    };
});






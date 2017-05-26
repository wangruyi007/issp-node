var app = angular.module('registeredAdd', ['toastr']);
app.controller('registeredAddCtrl', function($scope, registeredSer,$state,toastr){

    $scope.myFunc = function() {
        var type={type:$scope.type}
        registeredSer.listNameType(type).then(function(response){
            if(response.data.code == 0){
                $scope.companyNames = response.data.data;
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }
        });
    };


    //添加个人能力
    $scope.registeredAddFun = function(){
        var vm = $scope;
        var data = $scope.data;
        registeredSer.loginUpload(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.compete.registered.list');
                toastr.success( "竞争对手已成功添加", '温馨提示');
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
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






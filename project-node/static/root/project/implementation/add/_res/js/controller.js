/**
 * Created by ike on 2017/4/17.
 */
var app = angular.module('implementationAdd', ['toastr']);
app.controller('implementationAddCtrl', function($scope, implementationSer,$state,toastr){
    $scope.projectCarryFun = function(){
        var vm = $scope;
        implementationSer.addProjectCarry(vm.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.project.implementation.list');
                toastr.success("已成功添加", '温馨提示');
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }
        });
        $scope.changeSelect=function(){
            $scope.add.outerName = $scope.add.outerName2;
        };
        $scope.changeSelect2=function(){
            $scope.add.innerName = $scope.add.innerName2;
        };
        $scope.changeSelect3=function(){
            $scope.add.signProject = $scope.add.signProject2;
        };
        $scope.changeSelect4=function(){
            $scope.add.depatchNum = $scope.add.depatchNum2;
        };
        $scope.changeSelect5=function(){
            $scope.add.businessType = $scope.add.businessType2;
        };
        $scope.changeSelect6=function(){
            $scope.add.businessSubject = $scope.add.businessSubject2;
        };

    };
});






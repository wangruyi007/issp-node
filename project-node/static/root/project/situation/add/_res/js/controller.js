/**
 * Created by ike on 2017/4/17.
 */
var app = angular.module('projectAdd', ['toastr']);
app.controller('projectAddCtrl', function($scope, situationSer,$state,toastr){
    //添加公司能力
    $scope.projectAddFun = function(){
        var vm = $scope;
        situationSer.addProjectSituation(vm.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.project.situation.list');
                toastr.success("已成功添加", '温馨提示');
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }
        });

    };
    $scope.changeSelect=function(){
        $scope.add.outerName = $scope.add.outerName2;
    };
    $scope.changeSelect2=function(){
        $scope.add.innerName = $scope.add.innerName2;
    };
    $scope.changeSelect3=function(){
        $scope.add.saleNum = $scope.add.saleNum2;
    };
    $scope.changeSelect4=function(){
        $scope.add.depatchNum = $scope.add.depatchNum2;
    };
});






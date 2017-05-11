var app = angular.module('standardAdd', ['toastr']);
app.controller('standardAddCtrl', function($scope,$state,toastr,standardSer){

    $scope.standardAddFun = function(){
        $scope.add.date=angular.element('.time').val();
        standardSer.addStandard($scope.add).then(function(response){
            console.info($scope.add);
            if(response.data.code == 0){
                $state.go('root.contract.standard.list');
                toastr.success( $scope.add.projectInner+"已成功添加", '温馨提示');
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }
        });
    };
});






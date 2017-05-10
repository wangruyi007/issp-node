var app = angular.module('basicinfoAdd', ['toastr']);
app.controller('basicinfoAddCtrl', function($scope,$state,toastr,basicinfoSer){

    $scope.basicAddFun = function(){
        $scope.add.startTime=angular.element('.starttime').val();
        $scope.add.endTime=angular.element('.endtime').val();
        basicinfoSer.addBasicinfo($scope.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.contract.basicinfo.list');
                toastr.success( $scope.add.area+"已成功添加", '温馨提示');
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }
        });
    };
});






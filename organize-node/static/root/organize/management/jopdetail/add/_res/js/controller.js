var app = angular.module('jopdetailAdd', ['toastr']);
app.controller('jopdetailAddCtrl', function($scope,$state,toastr,jopdetailSer){

    jopdetailSer.getPosiInst().then(function(response){
        if(response.data.code==0){
            $scope.positions= response.data.data;
        }
    });
    $scope.jopdetailAddFun = function(){
        $scope.add.reportTime = angular.element('.time').val();
        console.info($scope.add);
        jopdetailSer.addJopDetail($scope.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.organize.management.jopdetail.list');
                toastr.success( response.data.data.serialNumber+"已成功添加", '温馨提示');
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }
        });
    }
});






var app = angular.module('qualiDelete', ['toastr','ipCookie']);
app.controller('qualiDeleteCtrl',function($scope,basicinfoSer,toastr,$stateParams,$state,ipCookie,$location){
    //删除
    $scope.delYes = function(){
        var data = {
            id :$stateParams.suId
        };
        basicinfoSer.deleteQualiBasic(data).then(function(response){
             if(response.data.code==0){
                toastr.info( "信息已删除", '温馨提示');
                $state.go('root.supplier.basicinfo.qualification');
                $scope.deledSubId = $stateParams.suId;
                //向父Ctrl传递事件
                $scope.$emit('deledSubId', $scope.deledSubId)
            }else {
                 toastr.error( response.data.msg, '温馨提示');
             }
        })
    }


});

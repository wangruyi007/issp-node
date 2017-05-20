/**
 * Created by ike on 2017/4/17.
 */
var app = angular.module('qualiDelete', ['toastr']);
app.controller('qualiDeleteCtrl',function($scope,basicinfoSer,toastr,$stateParams,$state){
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
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }
        })
    }


});

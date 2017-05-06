/**
 * Created by ike on 2017/4/17.
 */
var app = angular.module('rewardDelete', ['toastr']);
app.controller('rewardDeleteCtrl',function($scope,basicinfoSer,toastr,$stateParams,$state){
    //删除
    $scope.delYes = function(){
        var data = {
            id :$stateParams.subId
        };
        basicinfoSer.deleteRewardBasic(data).then(function(response){
             if(response.data.code==0){
                toastr.info( "信息已删除", '温馨提示');
                $state.go('root.supplier.basicinfo.winning');
                $scope.deledSubId = $stateParams.subId;
                //向父Ctrl传递事件
                $scope.$emit('deledSubId', $scope.deledSubId)
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }
        })
    }


});

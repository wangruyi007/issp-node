/**
 * Created by ike on 2017/4/17.
 */
var app = angular.module('selfcapDelete', ['toastr']);
app.controller('selfcapDeleteCtrl',function($scope,selfcapSer,toastr,$stateParams,$state){
    //删除
    $scope.delYes = function(){
        var data = {
            id :$stateParams.id
        };
             selfcapSer. deleteAbilitySelf(data).then(function(response){
             if(response.data.code==0){
                toastr.info( "信息已删除", '温馨提示');
                $state.go('root.ability.selfcap.list');
                $scope.deledId = $stateParams.id;
                //向父Ctrl传递事件
                $scope.$emit('deletedId', $scope.deledId)
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }
        })
    }


});

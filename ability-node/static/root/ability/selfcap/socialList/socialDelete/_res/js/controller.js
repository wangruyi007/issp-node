var app = angular.module('socialDelete', ['toastr']);
app.controller('socialDeleteCtrl',function($scope,selfcapSer,toastr,$stateParams,$state){
    //删除
    $scope.delYes = function(){
        var data = {
            id :$stateParams.subId
        };
             selfcapSer.deleteSocialSelf(data).then(function(response){
             if(response.data.code==0){
                toastr.info( "信息已删除", '温馨提示');
                $state.go('root.ability.selfcap.socialList');
                $scope.deledSubId = $stateParams.subId;
                //向父Ctrl传递事件
                $scope.$emit('deledSubId', $scope.deledSubId)
            }else{
                 toastr.error(response.data.msg, '温馨提示');
             }
        })
    }


});

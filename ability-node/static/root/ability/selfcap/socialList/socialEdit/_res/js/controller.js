/**
 * Created by ike on 2017/4/20.
 */
/**
 * Created by ike on 2017/4/18.
 */
var app = angular.module('socialPEdit', ['toastr']);
app.controller('socialPEditCtrl', function($scope, selfcapSer,$state,toastr,$stateParams){
    var selfcapId2 = {id : $stateParams.subId};
    //获取值
    selfcapSer.getFiveById(selfcapId2).then(function(response){
        if(response.data.code==0){
            $scope.peditInfo = response.data.data;
        }
    });
    $scope.selfcapEditFun = function(){
        var vm = $scope;
        selfcapSer.editSocialSelf(vm.peditInfo).then(function(response){
            if(response.data.code == 0){
                $state.go('root.ability.selfcap.socialList');
                toastr.success( "已成功添加", '温馨提示');
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }
        });
    };
});
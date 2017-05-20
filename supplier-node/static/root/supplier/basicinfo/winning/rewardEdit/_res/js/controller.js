/**
 * Created by ike on 2017/4/20.
 */
/**
 * Created by ike on 2017/4/18.
 */
var app = angular.module('rewardEdit', ['toastr']);
app.controller('rewardEditCtrl', function($scope, basicinfoSer,$state,toastr,$stateParams){
    var rewardId2 = {id : $stateParams.subId};
    //获取值
    basicinfoSer.qualificationList(rewardId2).then(function(response){
        if(response.data.code==0){
            $scope.editInfo = response.data.data;
        }
    });
    $scope.rewardEditFun = function(){
        var vm = $scope;
        basicinfoSer.editRewardBasic(vm.editInfo).then(function(response){
            if(response.data.code == 0){
                $state.go('root.supplier.basicinfo.list');
                toastr.success( "已成功编辑", '温馨提示');
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }
        });
    };
});
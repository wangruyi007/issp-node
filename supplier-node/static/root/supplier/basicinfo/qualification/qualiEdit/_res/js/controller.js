/**
 * Created by ike on 2017/4/20.
 */
/**
 * Created by ike on 2017/4/18.
 */
var app = angular.module('qualiEdit', ['toastr']);
app.controller('qualiEditCtrl', function($scope, basicinfoSer,$state,toastr,$stateParams){
    var qualiId = {id : $stateParams.suId};
    //获取值
    basicinfoSer.editQualiBasicById(qualiId).then(function(response){
        if(response.data.code==0){
            $scope.editInfo = response.data.data;
        }
    });
    $scope.qualiEditFun = function(){
        var vm = $scope;
        basicinfoSer.editQualiBasic(vm.editInfo).then(function(response){
            if(response.data.code == 0){
                $state.go('root.supplier.basicinfo.list');
                toastr.success( "已成功添加", '温馨提示');
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }
        });
    };
});
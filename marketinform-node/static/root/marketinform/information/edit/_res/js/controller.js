/**
 * Created by ike on 2017/4/18.
 */
var app = angular.module('informationEdit', ['toastr']);
app.controller('informationEditCtrl', function($scope, informationSer,$state,toastr,$stateParams){
    var informationId = {id : $stateParams.id};
    //获取值
    informationSer.getInformationById(informationId).then(function(response){
        if(response.data.code==0){
            $scope.editInfo = response.data.data;
        }
    });
    $scope.informationEditFun = function(){
        var vm = $scope;
        informationSer.editInformation(vm.editInfo).then(function(response){
            if(response.data.code == 0){
                $state.go('root.marketinform.information.list');
                toastr.success( "已成功编辑", '温馨提示');
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }
        });
    };
});
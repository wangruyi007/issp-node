/**
 * Created by ike on 2017/4/17.
 */
var app = angular.module('informationAdd', ['toastr']);
app.controller('informationAddCtrl', function($scope, informationSer,$state,toastr){
    //添加公司能力
    $scope.informationAddFun = function(){
        var vm = $scope;
        informationSer.addInformation(vm.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.marketinform.information.list');
                toastr.success("已成功添加", '温馨提示');
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }
        });

    };
});






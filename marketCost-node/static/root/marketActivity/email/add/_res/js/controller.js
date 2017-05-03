/**
 * Created by ike on 2017/4/17.
 */
var app = angular.module('emailAdd', ['toastr']);
app.controller('emailAddCtrl', function($scope, emailSer,$state,toastr){

    //添加
    $scope.emailAddFun = function(){
        var vm = $scope;
        var data = $scope.data;
        emailSer.addSummery(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.marketActivity.email.list');
                toastr.success( "竞争对手已成功添加", '温馨提示');
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }
        });

    };
    
});






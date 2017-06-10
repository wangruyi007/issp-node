var app = angular.module('marketserveAdd', ['toastr']);
app.controller('coststatusAddCtrl', function($scope, coststatusSer,$state,toastr){
    //添加
    $scope.companyAddFun = function(){
        var data = $scope.data;
        coststatusSer.addMarketserveapply(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.projectmeasure.manage.coststatus.list');
                toastr.success( "已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
});





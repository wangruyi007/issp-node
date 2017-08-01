var app = angular.module('companyAdd', ['toastr']);
app.controller('companyAddCtrl', function($scope,companySer,$state,toastr){
    //添加
    $scope.companyAddFun = function(){
        companySer.addCompany($scope.data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.express.company.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });

    };

});





var app = angular.module('companyEdit', ['toastr']);
app.controller('companyEditCtrl', function($scope, companySer,$stateParams,$state,toastr){
    var companyData ={id: $stateParams.id};
    //获取ID
    companySer.findCompanyId(companyData).then(function(response){
        if(response.data.code==0){
            $scope.editCompany = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    //编辑点击提交
    $scope.companyEditFun = function(){
        companySer.editGetCompany($scope.editCompany).then(function(response){
            if(response.data.code == 0){
                $state.go('root.express.company.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });

    };
});






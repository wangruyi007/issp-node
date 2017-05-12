/**
 * Created by ike on 2017/4/18.
 */
var app = angular.module('accountEdit', ['toastr']);
app.controller('accountEditCtrl', function($scope, accountSer,$state,toastr,$stateParams){
    var companyId = {id : $stateParams.id};
    //获取id对应的数据
    accountSer.getOneById1(companyId).then(function(response){
        if(response.data.code==0){
            $scope.data = response.data.data;
        }
    });
    //点击提交
    $scope.EditFun =function(){
        var data = $scope.data;
        $scope.data.month = angular.element('.month').val();//月份
        accountSer.editData(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.taxes.taxes.account.list');
                toastr.success('温馨提示',"此次编辑成功");
            }if(response.data.code == 403){
                toastr.error('温馨提示','提交错误')
            }
        })
    }
});
   
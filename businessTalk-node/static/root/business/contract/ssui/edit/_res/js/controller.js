/**
 * Created by ike on 2017/4/18.
 */
var app = angular.module('ssuiEdit', ['toastr']);
app.controller('ssuiEditCtrl', function($scope, ssuiSer,$state,toastr,$stateParams){
    var companyId = {id : $stateParams.id};
    //获取值
    ssuiSer.getOneById(companyId).then(function(response){
        if(response.data.code==0){
            $scope.data = response.data.data;
        }
    });
    //点击提交
    $scope.EditFun =function(){
       $scope.data.communicateDate = angular.element('.Time').val();//洽谈时间
         $scope.data.costBudget = Number($scope.num).toFixed(2);//项目预算
        var data = $scope.data;
        ssuiSer.marketserveapplyEdit(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.business.contract.ssui.list');
                toastr.success('温馨提示',"此次编辑成功");
            }if(response.data.code == 403){
                toastr.error('温馨提示','提交错误')
            }
        })
    }
    
});
   
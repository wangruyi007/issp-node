var app = angular.module('subpackageEdit', ['toastr']);
app.controller('subpackageEditCtrl', function($scope, subpackageSer,$state,toastr,$stateParams){
    var companyId = {id : $stateParams.id};
    //获取值
    subpackageSer.getOneById(companyId).then(function(response){
        if(response.data.code==0){
            $scope.data = response.data.data;
        }
    });
    //点击提交
    $scope.EditFun =function(){
       $scope.data.communicateDate = angular.element('.Time').val();//洽谈时间
        //  $scope.data.costBudget = Number($scope.num).toFixed(2);//项目预算
        var data = $scope.data;
        subpackageSer.marketserveapplyEdit(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.business.outsource.subpackage.list[12]');
                toastr.success('温馨提示',"此次编辑成功");
            }else if(response.data.code == 1){
                toastr.error( response.data.msg, '温馨提示');
            }
        })
    }
    
});
   
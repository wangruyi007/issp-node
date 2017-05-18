/**
 * Created by ike on 2017/4/18.
 */
var app = angular.module('giftEdit', ['toastr']);
app.controller('giftEditCtrl', function($scope, giftSer,$state,toastr,$stateParams){
    var companyId = {id : $stateParams.id};
    //获取值
    giftSer.getOneById1(companyId).then(function(response){
        if(response.data.code==0){
            $scope.data = response.data.data;
        }
    });
    //点击提交
    $scope.EditFun =function(){
        var data = $scope.data;
        data.id = companyId.id;;
        giftSer.gitfEdit(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.legalholiday.holiday.gift.list');
                toastr.success('温馨提示',"此次编辑成功");
            }if(response.data.code == 403){
                toastr.error('温馨提示','提交错误')
            }
        })
    }
    
});
   
var app = angular.module('subpackageEdit', ['toastr','ipCookie']);
app.controller('subpackageEditCtrl', function($scope, subpackageSer,$state,toastr,$stateParams,ipCookie,$location){
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
         $scope.data.costBudget = Number($scope.num).toFixed(2);//项目预算
        var data = $scope.data;
        subpackageSer.marketserveapplyEdit(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.business.outsource.subpackage.list');
                toastr.success('温馨提示',"此次编辑成功");
            }else if(response.data.code == 1){
                toastr.error( response.data.msg, '温馨提示');
            }else if(response.data.code==403  || response.data.code==401){
                toastr.error( "请登录用户,3秒后跳至登陆页面", '温馨提示');
                var absurl = $location.absUrl();
                ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes',domain:'issp.bjike.com' });
                setTimeout(function(){
                    window.location.href='http://localhost/login'
                },3000)
            }
        })
    }
    
});
   
/**
 * Created by ike on 2017/4/18.
 */
var app = angular.module('companyEdit', ['toastr','ipCookie']);
app.controller('companyEditCtrl', function($scope, marketserveSer,$state,toastr,$stateParams,ipCookie,$location){
    var companyId = {id : $stateParams.id};
    //获取值
    console.log(companyId.id)
    marketserveSer.getOneById(companyId).then(function(response){
        console.log(response)
        if(response.data.code==0){
            console.log(response.data.data)
            $scope.data = response.data.data;
        }
    });
    //点击提交
    $scope.EditFun =function(){
        $scope.data.planActivityTiming = angular.element('.addPlanTime').val();//计划时间
        $scope.data.actualActivityTiming = angular.element('.addActualTime').val();//实际时间
        var data = $scope.data;
        data.id = companyId.id;
        marketserveSer.marketserveapplyEdit(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.marketActivity.marketserve.list');
                toastr.success('温馨提示',"此次编辑成功");
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
   
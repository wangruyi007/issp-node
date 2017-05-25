/**
 * Created by ike on 2017/4/17.
 */
var app = angular.module('cooperationDelete', ['toastr']);
app.controller('cooperationDeleteCtrl',function($scope,basicinfoSer,toastr,$stateParams,$state,ipCookie){
    //删除
    $scope.delYes = function(){
        var data = {
            id :$stateParams.suId
        };
        basicinfoSer.deleteCooperationBasic(data).then(function(response){
             if(response.data.code==0){
                toastr.info( "信息已删除", '温馨提示');
                $state.go('root.supplier.basicinfo.cooperation');
                $scope.deledSubId = $stateParams.suId;
                //向父Ctrl传递事件
                $scope.$emit('deledSubId', $scope.deledSubId)
            }else if (response.data.code == 403||response.data.code == 401) {
                 toastr.error( "请登录用户,3秒后跳至登陆页面", '温馨提示');
                 var absurl = $location.absUrl();
                 ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes',domain:'issp.bjike.com' })
                 setTimeout(function(){
                     window.location.href='http://localhost/login'
                 },3000)
             }
        })
    }


});

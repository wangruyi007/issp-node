var app = angular.module('month', ['ng-pagination','toastr','ipCookie']);
app.controller('monthCtrl',function($scope,summarySer,toastr,ipCookie){

    $scope.moreList = function(event){
        angular.forEach($scope.listmonth,function(obj){
            if(event.id!==obj.id){
                obj._moreList = false
            }
        });
        event._moreList = !event._moreList;
    };

    $scope.mouthSum = function(){

      month($scope.collect)
    };
        function month(data){
            summarySer.listMonth(data).then(function(response){
                if(response.data.code==0){
                    $scope.listmonth = response.data.data;
                }else if(response.data.code==403||response.data.code==401){
                    toastr.error( "请登录用户,2秒后跳至登陆页面", '温馨提示');
                    var absurl = $location.absUrl();
                    ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes' });
                    setTimeout(function(){
                        window.location.href='http://localhost/login'
                    },2000)
                }else{
                    toastr.error( "请求超时，请联系管理员", '温馨提示');
                }
            });
        }
    month()

})
;



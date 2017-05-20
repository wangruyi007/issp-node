
var app = angular.module('summary', ['toastr','angularjs-dropdown-multiselect','ipCookie']);
app.controller('summaryCtrl', function($scope, emailSer,toastr,$location,ipCookie){
    $scope.areas = [];
    $scope.stringSettings = {template : '{{option}}', smartButtonTextConverter(skip, option) { return option; }};
    //获取地区
    emailSer.getArea().then(function(response){
        if(response.data.code == 0){
            $scope.workOptions = response.data.data;
        } else if(response.data.code == 403){
            toastr.error("请登录用户", '温馨提示');
        }
    });
    $scope.getSummary ={onSelectionChanged(){
        emailSer.summaryList($scope.areas).then(function(response){
            if(response.data.code == 0){
                $scope.summaryLists = response.data.data;
            }else if(response.data.code==403||response.data.code==401){
                toastr.error( "请登录用户,3秒后跳至登陆页面", '温馨提示');
                var absurl = $location.absUrl();
                ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes' });
                setTimeout(function(){
                    window.location.href='http://localhost/login'
                },3000)
            }
        })
    }}
});






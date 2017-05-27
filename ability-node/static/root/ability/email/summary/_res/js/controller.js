var app = angular.module('emailSummary', ['toastr','angularjs-dropdown-multiselect','ipCookie']);
app.controller('emailSummaryCtrl', function($scope, emailSer,toastr,ipCookie,$location){
    $scope.words = [];
    $scope.stringSettings = {template : '{{option}}', smartButtonTextConverter(skip, option) { return option; }};
    //获取公司
    emailSer.getCompanyNames().then(function(response){
        if(response.data.code == 0){
            $scope.workOptions = response.data.data;
        }else if (response.data.code == 403||response.data.code==401) {
            toastr.error( "请登录用户,3秒后跳至登陆页面", '温馨提示');
            var absurl = $location.absUrl();
            ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes',domain:'issp.bjike.com' })
            setTimeout(function(){
                window.location.href='http://localhost/login'
            },3000)
        }
    });
    $scope.getSummary ={onSelectionChanged(){
        emailSer.ectSummaryCompany($scope.words).then(function(response){
            if(response.data.code == 0){
                  $scope.summaryLists = response.data.data;
            }else if (response.data.code == 403||response.data.code==401) {
                toastr.error( "请登录用户,3秒后跳至登陆页面", '温馨提示');
                var absurl = $location.absUrl();
                ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes',domain:'issp.bjike.com' })
                setTimeout(function(){
                    window.location.href='http://localhost/login'
                },3000)
            }
        })
    }}
});






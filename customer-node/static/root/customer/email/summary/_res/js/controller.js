/**
 * Created by Bjike on 2017/4/15.
 */
var app = angular.module('emailSummary', ['toastr','angularjs-dropdown-multiselect','ipCookie']);
app.controller('emailSummaryCtrl',function($scope,emailSer,toastr,ipCookie){
    $scope.words = [];
    $scope.stringSettings = {template : '{{option}}', smartButtonTextConverter(skip, option) { return option; }};
    //获取行业
    emailSer.getWorks().then(function(response){
        if(response.data.code == 0){
            $scope.workOptions = response.data.data;
        }else if(response.data.code==403||response.data.code==401){
            toastr.error( "请登录用户,2秒后跳至登陆页面", '温馨提示');
            var absurl = $location.absUrl();
            ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes' });
            setTimeout(function(){
                window.location.href='http://localhost/login'
            },2000)
        }
    });

    $scope.getSummary ={onSelectionChanged(){
        emailSer.getSummarys($scope.words).then(function(response){
            if(response.data.code == 0){
                $scope.summaryLists = response.data.data;
                angular.forEach($scope.summaryLists,function(item,index){
                    if(item.work=="合计"){
                        $scope.tabTit = item;
                    }
                });
            }
        })
    }}

});



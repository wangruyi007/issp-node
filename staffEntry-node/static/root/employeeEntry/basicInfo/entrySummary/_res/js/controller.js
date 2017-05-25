var app = angular.module('entrySummary', ['toastr','angularjs-dropdown-multiselect','ipCookie']);
app.controller('entrySummaryCtrl', function($scope, basicInfoSer,toastr,ipCookie,$location){
    $scope.postNames = [];
    $scope.stringSettings = {template : '{{option}}', smartButtonTextConverter(skip, option) { return option; }};

    // 获取地区
    basicInfoSer.getAllPost().then(function(response){
        if(response.data.code == 0){
            $scope.workOptions = response.data.data;
        } else if(response.data.code == 403){
            toastr.error("请登录用户", '温馨提示');
        }
    });
    $scope.collect = function(){
        var vm = $scope;
        vm.sum={
            startDate:angular.element('.start').val(),
            endDate:angular.element('.end').val(),
            postNames:vm.postNames
        };
        basicInfoSer.collectBasicInfo(vm.sum).then(function(response){
            if(response.data.code == 0){
                $scope.summaryLists = response.data.data;
            }else if(response.data.code==403||response.data.code==401){
                toastr.error( "请登录用户,3秒后跳至登陆页面", '温馨提示');
                var absurl = $location.absUrl();
                ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes',domain:'issp.bjike.com'});
                setTimeout(function(){
                    window.location.href='http://localhost/login'
                },3000)
            }
        })
    };

});





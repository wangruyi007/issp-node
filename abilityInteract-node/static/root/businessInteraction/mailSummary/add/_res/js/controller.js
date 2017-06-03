var app = angular.module('mailSummaryAdd', ['toastr','angularjs-dropdown-multiselect','ipCookie']);
app.controller('mailSummaryAddCtrl', function($scope, emailSer,$state,toastr,$location,ipCookie){
    $scope.works = [];
    $scope.stringSettings = {template : '{{option}}', smartButtonTextConverter(skip, option) { return option; }};
//获取所有地区
        emailSer.getArea().then(function(response){
            if(response.data.code == 0){
                $scope.workOptions = response.data.data
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });


    //添加
    $scope.EmailAddFun = function(){
        var vm = $scope;
        vm.emails.works = vm.works;
        emailSer.addEmail(vm.emails).then(function(response){
            if(response.data.code == 0){
                $state.go('root.businessInteraction.mailSummary.list');
                toastr.success("已成功添加", '温馨提示');
            }else if(response.data.code==403||response.data.code==401){
                toastr.error( "请登录用户,2秒后跳至登陆页面", '温馨提示');
                var absurl = $location.absUrl();
                ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes',domain:'issp.bjike.com' });
                setTimeout(function(){
                    window.location.href='http://localhost/login'
                },2000)
            }else if(response.data.code==1){
                toastr.error( response.data.msg, '温馨提示');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
//双击删除对象
    $scope.dbsend = function(){
        $scope.emails.sendObjectList = " ";
    }
});





/**
 * Created by ike on 2017/4/17.
 */
var app = angular.module('selfcapAdd', ['toastr']);
app.controller('selfcapAddCtrl', function($scope, selfcapSer,$state,toastr,ipCookie,$location){
    //添加个人能力
    $scope.personAddFun = function(){
        var vm = $scope;
        var data = {
            name: vm.addname,
            capacity: vm.addcapacity,
            selfJobTitle: vm.addselfJobTitle,
            positionTitle: vm.addpositionTitle,
            workYear: vm.addworkYear,
            selfProject: vm.addselfProject,
           };
        selfcapSer.addSelfCapAbility(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.ability.selfcap.list');
                toastr.success( vm.addname+"已成功添加", '温馨提示');
            }else if (response.data.code == 403||response.data.code==401) {
                toastr.error( "请登录用户,3秒后跳至登陆页面", '温馨提示');
                var absurl = $location.absUrl();
                ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes',domain:'issp.bjike.com' })
                setTimeout(function(){
                    window.location.href='http://localhost/login'
                },3000)
            }
        });

    };
    //可手填的下拉框
    $scope.changeSelect=function(){
        $scope.addname = $scope.addname2;
    };
    $scope.changeSelect2=function(){
        $scope.addcapacity = $scope.addcapacity2;
    };
    $scope.changeSelect3=function(){
        $scope.addselfJobTitle = $scope.addselfJobTitle2

    };
    $scope.changeSelect4=function(){

        $scope.addpositionTitle = $scope.addpositionTitle2;
    };
    $scope.changeSelect5=function(){
        $scope.addworkYear = $scope.addworkYear2;
    };
    $scope.changeSelect6=function(){
        $scope.addselfProject = $scope.addselfProject2;
    };
});






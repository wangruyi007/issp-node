var app = angular.module('mailSummaryAdd', ['toastr','angularjs-dropdown-multiselect']);
app.controller('mailSummaryAddCtrl', function($scope, emailSer,$state,toastr){
    $scope.works = [];
    $scope.stringSettings = {template : '{{option}}', smartButtonTextConverter(skip, option) { return option; }};
//获取所有地区
        emailSer.getArea().then(function(response){
            if(response.data.code == 0){
                $scope.workOptions = response.data.data
            }else if(response.data.code == 403){
                toastr.error("请登录用户","温馨提示");
            }
        });


    //添加
    $scope.EmailAddFun = function(){
        var vm = $scope;
        vm.email.works = vm.works;
        emailSer.addEmail(vm.email).then(function(response){
            if(response.data.code == 0){
                $state.go('root.businessInteraction.mailSummary.list');
                toastr.success("已成功添加", '温馨提示');
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }
        });

    };
    $scope.words = [];
    $scope.stringSettings = {template : '{{option}}', smartButtonTextConverter(skip, option) { return option; }};

});





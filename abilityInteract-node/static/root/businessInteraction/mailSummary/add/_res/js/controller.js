var app = angular.module('mailSummaryAdd', ['toastr','angularjs-dropdown-multiselect']);
app.controller('mailSummaryAddCtrl', function($scope, emailSer,$state,toastr){
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

        var data = {
            works : vm.works,
            sendNum : vm.sendNum,
            customerSendUnit:vm.customerSendUnit,
            customerCollectUnit:vm.customerCollectUnit,
            sendObjectList:vm.sendObjectList,
            remark:vm.remark
        };
        emailSer.addEmail(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.businessInteraction.mailSummary.list');
                toastr.success("已成功添加", '温馨提示');
            }else {
                toastr.error(response.data.msg,'温馨提示')
            }
        });

    };
//双击删除对象
    $scope.dbsend = function(){
        $scope.emails.sendObjectList = " ";
    }
});





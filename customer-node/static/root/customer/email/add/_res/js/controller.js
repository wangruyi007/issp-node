var app = angular.module('emailAdd', ['toastr', 'angularjs-dropdown-multiselect','ipCookie']);
app.controller('emailAddCtrl', function($scope, emailSer, $state, toastr,ipCookie,$location){
    $scope.condis= [];
    $scope.stringSettings = {template : '{{option}}', smartButtonTextConverter(skip, option) { return option; }};
    //获取所有汇总
    $scope.objLists = [];
    //获取行业
    emailSer.getWorks().then(function(response){
        if(response.data.code == 0){
            $scope.workOptions = response.data.data
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    //添加邮箱
    $scope.addMail = function(){
        $scope.objLists.push($scope.sendObjectList);
        $scope.sendObjectList = '';
    };
    $scope.dbSend = function (index) {
        $scope.objLists.splice(index,1);
    }
    $scope.emails = ['个人邮箱','公邮','自由录入'];

    $scope.addEmailFun = function(){
        var vm = $scope;
        var data = {
            works : vm.words,
            sendNum : vm.sendNum,
            customerSendUnit:vm.customerSendUnit,
           /* customerCollectUnit:vm.customerCollectUnit,*/
            sendObjectList: $scope.objLists,
            remark:vm.remark
        }
        emailSer.addCusemail(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.customer.email.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
    $scope.words = [];
    $scope.stringSettings = {template : '{{option}}', smartButtonTextConverter(skip, option) { return option; }};

});






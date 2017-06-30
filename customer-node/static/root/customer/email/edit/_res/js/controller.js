var app = angular.module('emailEdit', ['toastr','angularjs-dropdown-multiselect','ipCookie']);
app.controller('emailEditCtrl', function($scope, emailSer, $state, toastr, $stateParams,ipCookie,$location){
    //获取所有汇总
    $scope.objLists = [];
    var emailId = {id : $stateParams.id};
    $scope.words = [];
    //获取行业
    emailSer.getWorks().then(function(response){
        if(response.data.code == 0){
            $scope.workOptions = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });

   $scope.stringSettings = {template : '{{option}}', smartButtonTextConverter(skip, option) { return option; }};

    emailSer.getCusEmailById(emailId).then(function(response){
        if(response.data.code==0){
            var works = response.data.data.work;
            $scope.words=works.substr(0, works.length - 1).split(';');
            $scope.emailInfo = response.data.data
        }else if(response.data.code==1){
            toastr.error( response.data.msg, '温馨提示');
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    $scope.emails = ['个人邮箱','公邮','自由录入'];

    $scope.addMail = function(){
        $scope.objLists.push($scope.sendObjectList);
        $scope.sendObjectList = '';
    };

    $scope.dbSend = function (index) {
        $scope.objLists.splice(index,1);
    }

    $scope.editEmailFun = function(){
        var vm = $scope;
        var data = {
            id:vm.emailInfo.id,
            works:vm.words,
            sendNum : vm.emailInfo.sendNum,
            customerSendUnit : vm.emailInfo.customerSendUnit,
      /*   customerCollectUnit:vm.emailInfo.customerCollectUnit,*/
            remark:vm.emailInfo.remark,
            sendObjectList:$scope.objLists
        }
        emailSer.editEmail(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.customer.email.list[12]');
                toastr.success("已编辑成功", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        })
    };


});






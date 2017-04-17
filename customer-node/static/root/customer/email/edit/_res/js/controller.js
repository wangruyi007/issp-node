var app = angular.module('emailEdit', ['toastr','angularjs-dropdown-multiselect']);
app.controller('emailEditCtrl', function($scope, emailSer, $state, toastr, $stateParams){

    var emailId = {id : $stateParams.id};
    $scope.words = [];
    //获取行业
    emailSer.getWorks().then(function(response){
        if(response.data.code == 0){
            $scope.workOptions = response.data.data;
        } else if(response.data.code == 403){
            toastr.error("请登录用户", '温馨提示');
        }
    });


    $scope.stringSettings = {template : '{{option}}', smartButtonTextConverter(skip, option) { return option; }};

    emailSer.getCusEmailById(emailId).then(function(response){
        if(response.data.code==0){
            var works = response.data.data.work;
            $scope.words=works.substr(0, works.length - 1).split(';');
            $scope.emailInfo = response.data.data
        }

    });

    $scope.editEmailFun = function(){
        var vm = $scope;
        var data = {
            id:vm.emailInfo.id,
            works:vm.words,
            sendNum : vm.emailInfo.sendNum,
            customerSendUnit : vm.emailInfo.customerSendUnit,
            customerCollectUnit:vm.emailInfo.customerCollectUnit,
            remark:vm.emailInfo.remark,
            sendObjectList:vm.emailInfo.sendObjectList
        }
        emailSer.editEmail(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.customer.email.list');
                toastr.success("已编辑成功", '温馨提示');
            } else if(response.data.code == 403){
                toastr.error("请登录用户", '温馨提示');
            }
        })
    };


});






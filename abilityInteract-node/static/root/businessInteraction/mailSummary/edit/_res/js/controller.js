var app = angular.module('mailSummaryEdit', ['toastr','angularjs-dropdown-multiselect']);
app.controller('mailSummaryEditCtrl', function($scope, emailSer,$stateParams,$state,toastr){
    var emailData ={id: $stateParams.id};
    $scope.works = [];
    $scope.stringSettings = {template : '{{option}}', smartButtonTextConverter(skip, option) { return option; }};
    //获取ID
    emailSer.findEmailId(emailData).then(function(response){
        if(response.data.code=='0'){
            $scope.editMail = response.data.data;
        }else if (response.data.code==403){
            toastr.error( "请登录用户", '温馨提示');
        }

    });
//获取所有地区
    emailSer.getArea().then(function(response){
        if(response.data.code == 0){
            $scope.workOptions = response.data.data
        }else if(response.data.code == 403){
            toastr.error("请登录用户","温馨提示");
        }
    });

    //编辑点击提交
    $scope.emailEditFun = function(){
        var vm = $scope;
        vm.editMail.works = vm.works;
        emailSer.editEmail(vm.editMail).then(function(response){
            if(response.data.code == 0){
                $state.go('root.businessInteraction.mailSummary.list');
                toastr.success( "编辑成功", '温馨提示');
            }else if(response.data.code == 403){
                toastr.error( "请登录用户", '温馨提示');
            }
        });

    };
});






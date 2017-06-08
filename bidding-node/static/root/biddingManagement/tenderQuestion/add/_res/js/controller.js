var app = angular.module('questionAdd', ['toastr']);
app.controller('questionAddCtrl', function ($scope, questionSer, $state, toastr) {

    //添加
    $scope.questionAddFun = function () {
        var vm = $scope;
        vm.answer.officeHour = angular.element('.officeHour').val();

        questionSer.addAnswer(vm.answer).then(function (response) {
            if (response.data.code == 0) {
                $state.go('root.biddingManagement.tenderQuestion.list');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});





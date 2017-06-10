var app = angular.module('contactAdd', ['toastr']);
app.controller('contactAddCtrl', function($scope, contactSer,$state,toastr){

    //添加
    $scope.interactAddFun = function(){
        var vm = $scope;

        contactSer.addInteract(vm.contact).then(function(response){
            if(response.data.code == 0){
                $state.go('root.businessInteraction.interactContact.list');
                toastr.success("已成功添加", '温馨提示');
            }else {
                toastr.error(response.data.msg,'温馨提示')
            }
        });

    };

});





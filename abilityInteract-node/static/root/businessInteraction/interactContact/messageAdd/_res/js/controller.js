var app = angular.module('messageAdd', ['toastr']);
app.controller('messageAddCtrl', function($scope, contactSer,$stateParams,$state,toastr){
    var interactData ={id: $stateParams.id};

    //获取ID
    contactSer.findInteractId(interactData).then(function(response){
        if(response.data.code=='0'){
            $scope.addMsg = response.data.data;
        }else {
            toastr.error(response.data.msg,'温馨提示')
        }

    });
    //添加
    $scope.messageAddFun = function(){
        var vm = $scope;
        vm.addMsg.interactionId = $stateParams.id;
        contactSer.addMessage(vm.addMsg).then(function(response){
            if(response.data.code == 0){
                $state.go('root.businessInteraction.interactContact.list');
                toastr.success("已成功添加", '温馨提示');
            }else {
                toastr.error(response.data.msg,'温馨提示')
            }
        });

    };

});





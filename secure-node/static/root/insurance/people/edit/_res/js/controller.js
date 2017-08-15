var app = angular.module('peopleEdit', ['toastr']);
app.controller('peopleEditCtrl', function($scope, peopleSer,$stateParams,$state,toastr){
    var webData ={id: $stateParams.id};

    //获取ID
    peopleSer.peopleId(webData).then(function(response){
        if(response.data.code==0){
            $scope.people = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }

    });

    //编辑点击提交
    $scope.webEditFun = function(){
        var vm = $scope;
        peopleSer.peopleEdit(vm.people).then(function(response){
            if(response.data.code == 0){
                $state.go('root.insurance.people.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});






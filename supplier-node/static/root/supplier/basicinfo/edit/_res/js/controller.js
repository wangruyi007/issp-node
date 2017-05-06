var app = angular.module('basicinfoEdit', ['toastr']);
app.controller('basicinfoEditCtrl', function($scope, basicinfoSer,$stateParams,$state,toastr){
    var editData ={id: $stateParams.id};

    //获取ID
    basicinfoSer.editBasicInfoById(editData).then(function(response){
        if(response.data.code=='0'){
            $scope.editBasicInfo = response.data.data;
        }else if (response.data.code==403){
            toastr.error( "请登录用户", '温馨提示');
        }

    });
    //编辑点击提交
    $scope.basicInfoEditFun = function(){
        var vm = $scope;
        basicinfoSer.basicInfoEdit(vm.editBasicInfo).then(function(response){
               if(response.data.code == 0){
                $state.go('root.supplier.basicinfo.list');
                toastr.success( "编辑成功", '温馨提示');
            }else if(response.data.code == 403){
                toastr.error( "请登录用户", '温馨提示');
            }
        });

    };
    $scope.changeSelect=function(){
        $scope.editBasicInfo.area = $scope.editBasicInfo.area2;
    };
});






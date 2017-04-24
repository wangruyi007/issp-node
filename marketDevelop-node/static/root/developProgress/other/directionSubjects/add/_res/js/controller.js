var app = angular.module('directionAdd', ['toastr']);
app.controller('directionAddCtrl', function($scope, directionSer,$stateParams,$state,toastr){

    var typeId={'_includes':['id','type']};
    directionSer.courseGetType(typeId).then(function(response){
        console.log(response);
        if(response.data.code==0){
            $scope.courseGetType = response.data.data
        } else if(response.data.code == 403){
            toastr.error("请登录用户", '温馨提示');
        }
    });
    //添加
    $scope.courseAddFun = function(){
        var vm = $scope;
        var data = {
            type_id : vm.courseGetType.type_id,
            typeName : vm.courseGetType.typeName,
            course : vm.addCourse,
            description : vm.addDescription
        };
        directionSer.coursedAdd(data).then(function(response){

            if(response.data.code == 0){
                $state.go('root.developProgress.other.directionSubjects.list');
                toastr.success(vm.courseGetType.type_id + "已成功添加", '温馨提示');
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }
        });

    };

});





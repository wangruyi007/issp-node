var app = angular.module('directionEdit', ['toastr']);
app.controller('directionEditCtrl', function($scope, directionSer,$stateParams,$state,toastr){
    var measuredData ={courseId: $stateParams.id};

    //获取ID
    directionSer.findCourseId(measuredData).then(function(response){
        if(response.data.code=='0'){
            $scope.editCourse= response.data.data;
        }else if (response.data.code==403){
            toastr.error( "请登录用户", '温馨提示');
        }

    });


    //编辑点击提交
    $scope.CourseEditFun = function(){

        var vm = $scope;
        var data = {
            id:vm.editCourse.id,
            type_id : vm.editCourse.type_id,
            typeName : vm.editCourse.typeName,
            course : vm.editCourse.course,
            description : vm.editCourse.description
        };
        directionSer.courseEdit(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.developProgress.market.marketMeasured.list');
                toastr.success( "编辑成功", '温馨提示');
            }else if(response.data.code == 403){
                toastr.error( "请登录用户", '温馨提示');
            }
        });

    };
});






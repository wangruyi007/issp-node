var app = angular.module('jopdesAdd', ['toastr','angularjs-dropdown-multiselect']);
app.controller('jopdesAddCtrl', function($scope,$state,toastr,jopdesSer,$stateParams){
    $scope.words = [];
    $scope.stringSettings = {template : '{{option}}', smartButtonTextConverter(skip, option) { return option; }};
    $scope.workOptions=['123','321']





    //所属部门
    /*var getId = {id : $stateParams.id};*/
    jopdesSer.getDepartmentId().then(function(response){
        if(response.data.code == 0){
            $scope.departmentData = response.data.data;
        }

    });
    //岗位详细id
    jopdesSer.getPositionId().then(function(response){
        if(response.data.code == 0){
            $scope.positionData = response.data.data;
        }
    });
    //岗位层级
    jopdesSer.getArrangementId().then(function(response){
        if(response.data.code == 0){
            $scope.arrData = response.data.data;
        }
    });
    //体系
    jopdesSer.getHierarchyId().then(function(response){
        if(response.data.code == 0){
            $scope.hierData = response.data.data;
        }
    });
    //角度

    jopdesSer.getAngle().then(function(response){
        if(response.data.code == 0){
            $scope.angles = response.data.data
        }
    });
    //维度
    jopdesSer.getDimension().then(function(response){
        if(response.data.code == 0){
            $scope.dimensions = response.data.data
        }
    });
    //分类
    jopdesSer.getClassify().then(function(response){
        if(response.data.code == 0){
            $scope.classifys = response.data.data
        }
        jopdesSer.getAngle().then(function(response){
            if(response.data.code == 0){
                $scope.angData = response.data.data;
            }
        });
        //维度
        jopdesSer.getDimension().then(function(response){
            if(response.data.code == 0){
                $scope.aDimensData = response.data.data;

            }
        });
        //添加
        $scope.jopdesAddFun = function(){
            var vm = $scope;
            console.info(vm.add);
            jopdesSer.addJopDes(vm.add).then(function(response){

            });
        }

    })
});






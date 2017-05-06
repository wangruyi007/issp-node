var app = angular.module('jopdesAdd', ['toastr','angularjs-dropdown-multiselect']);
app.controller('jopdesAddCtrl', function($scope,$state,toastr,jopdesSer,$stateParams){
    $scope.words = [];
    $scope.stringSettings = {template : '{{option}}', smartButtonTextConverter(skip, option) { return option; }};
    $scope.workOptions=['123','321']
<<<<<<< Updated upstream
      //所属部门
    /*var getId = {id : $stateParams.id};*/
    /*jopdesSer.getDepartmentId().then(function(response){
        if(response.data.code == 0){
            $scope.departmentData = response.data.data;
        }
    });*/
    jopdesSer.getDepartList(['id','department']).then(function(response){

        if(response.data.code==0){
            $scope.departments = response.data.data
        }
=======




    //所属部门
    /*var getId = {id : $stateParams.id};*/
    jopdesSer.getDepartmentId().then(function(response){
        if(response.data.code == 0){
            $scope.departmentData = response.data.data;
        }
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
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
=======
    jopdesSer.getAngleId().then(function(response){
        if(response.data.code == 0){
            $scope.angData = response.data.data;
        }
    });
   //维度
    jopdesSer.getDimensionId().then(function(response){
        if(response.data.code == 0){
            $scope.aDimensData = response.data.data;
>>>>>>> Stashed changes
        }
    });
    //添加
    $scope.jopdesAddFun = function(){
        var vm = $scope;
<<<<<<< Updated upstream
        jopdesSer.addJopDes(vm.add).then(function(response){
        });
    }
=======
        var data = {
            department : vm.postsData.serialNumber,

/*          positionId : vm.postsData.id,
            angleId : vm.angleId,
            dimensionId : vm.dimensionId,
            classifyId : vm.classifyId,
            reflectId : vm.reflectId,
            operateId : vm.operateId,
            description : vm.description,
            outcome : vm.outcome,
            frequency : angular.element('.frequency').val(),
            timeNode : angular.element('.timeNode').val()*/
        };
        jopdesSer.addJopDes(vm.add).then(function(response){

        });
    }

>>>>>>> Stashed changes
});






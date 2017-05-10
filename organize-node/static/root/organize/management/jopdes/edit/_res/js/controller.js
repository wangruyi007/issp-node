var app = angular.module('jopdesEdit', ['toastr','angularjs-dropdown-multiselect']);
app.controller('jopdesEditCtrl', function($scope,$state,toastr,jopdesSer,$stateParams){
    //操作类型
    $scope.operates = [];
    $scope.operatesettings = {displayProp: 'name'};
    jopdesSer.getOperate().then(function(response){
        if(response.data.code==0){
            $scope.operateOptions= [];
            angular.forEach(response.data.data,function(obj){
                $scope.operateOptions.push(obj)
            });
        }
    });

    //体现类型
    $scope.reflects = [];
    $scope.reflectsettings = {displayProp: 'name'};
    jopdesSer.getReflect().then(function(response){
        if(response.data.code==0){
            $scope.reflectOptions= [];
            angular.forEach(response.data.data,function(obj){
                $scope.reflectOptions.push(obj)
            });
        }
    });


    //岗位详细id
    jopdesSer.getPositionId().then(function(response){
        if(response.data.code == 0){
            $scope.positionData = response.data.data;
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

    });

    var id = {id:$stateParams.id};
    //根据ID获取信息
    jopdesSer.getJopDesById(id).then(function(response){
        if(response.data.code == 0){
            $scope.edit = response.data.data;
        }

    });
    $scope.jopdesEditFun=function(){
        $scope.postsData.id=$stateParams.id;
        jopdesSer.editPosts($scope.postsData).then(function(response){
            if(response.data.code==0){
                if(!response.data.data){
                    toastr.info(response.data.msg , '温馨提示');
                }else{
                    $state.go('root.organize.management.jopdes.list');
                    toastr.success("已成功编辑", '温馨提示');
                }
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }
        });
    }
});






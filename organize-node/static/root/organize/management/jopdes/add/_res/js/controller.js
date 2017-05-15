var app = angular.module('jopdesAdd', ['toastr','angularjs-dropdown-multiselect','ipCookie']);
app.controller('jopdesAddCtrl', function($scope,$state,toastr,jopdesSer,$stateParams,ipCookie){
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

    //添加
    $scope.jopdesAddFun = function(){
        var vm = $scope;
        vm.add.operateIds=[];
        vm.add.reflectIds=[];
        angular.forEach($scope.operates,function(item){
            vm.add.operateIds.push(item.id)
        });
        angular.forEach($scope.reflects,function(item){
            vm.add.reflectIds.push(item.id)
        });
        jopdesSer.addJopDes(vm.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.organize.management.jopdes.list');
                toastr.success( vm.add.serialNumber+"已成功添加", '温馨提示');
            }else if(response.data.code==403||response.data.code==401){
                toastr.error( "请登录用户,2秒后跳至登陆页面", '温馨提示');
                var absurl = $location.absUrl();
                ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes' });
                setTimeout(function(){
                    window.location.href='http://localhost/login'
                },2000)
            }
        });
    }
});






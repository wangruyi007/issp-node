var app = angular.module('levelList', ['ng-pagination','toastr']);
app.controller('levelListCtrl',function($scope,levelSer,toastr,$stateParams,$state){

    $scope.$emit('changeId', null);
    //监听切换搜索是否出现
    $scope.$on('iSsearch',function(event,newIs){
        $scope.isView = newIs;
    });
    //获取id
    if($stateParams.id){
        switch ($stateParams.name){
            case 'delete':
                $scope.delShow = true;
                break;
        }
    }
    $scope.cancel = function(){//取消删除
        $scope.delShow = false;
        $state.go('root.customer.level.list[12]',{id:null,name:null});
    };
    $scope.delFn = function(){//确认删除
        var data = {
            id:$stateParams.id
        };
        levelSer.deleteLevel(data).then(function(response){
            if(response.data.code==0){
                toastr.info( "信息已删除", '温馨提示');
                $scope.deledId = $stateParams.id;
                $scope.$emit('changeId', null);
                $scope.delShow = false;
                $state.go('root.customer.level.list[12]',{id:null,name:null});
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };

    $scope.$emit('changeCusnum', null)
    levelSer.listCustomerLevel().then(function(response){
        if(response.data.code==0){
            $scope.levelLists = response.data.data;
        }
    });

    $scope.selectList = function(event){
        angular.forEach($scope.levelLists,function(obj){
            obj._selectList = false
        });
        event._selectList = true;
        $scope.idList = event.id;
        $scope.levelName = event.name;
        //向父Ctrl传递事件
        $scope.$emit('changeId', $scope.idList);
        $scope.$emit('changeLevelName', $scope.levelName);
    }

    $scope.$on('deletedId',function(event,delid){
        angular.forEach($scope.levelLists,function(obj){
            if(obj.id == delid){
                obj._delete = true
            }
        })
    })
});



var app = angular.module('typeList', ['ng-pagination','toastr']);
app.controller('typeListCtrl',function($scope,typeSer,toastr,$stateParams,$state) {
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
            case 'congeal':
                $scope.congealShow = true;
                break;
        }
    }
    $scope.cancel = function(){//取消删除/解冻
        $scope.delShow = false;
        $scope.congealShow = false;
        $state.go('root.supplier.type.list[12]',{id:null,name:null});
    };
    $scope.delFn = function(){//确认删除
        var data = {
            id:$stateParams.id
        };
        typeSer.deleteType(data).then(function(response){
            if(response.data.code==0){
                toastr.info( "信息已删除", '温馨提示');
                $scope.deledId = $stateParams.id;
                $scope.$emit('changeId', null);
                $scope.delShow = false;
                $state.go('root.supplier.type.list[12]',{id:null,name:null});
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };

    $scope.conFn = function(){//确认冻结
        var data = {
            id:$stateParams.id
        };
        typeSer.congealType(data).then(function(response){
            if(response.data.code==0){
                toastr.info( "信息已冻结", '温馨提示');
                $scope.deledId = $stateParams.id;
                $scope.$emit('changeId', null);
                $scope.delShow = false;
                $state.go('root.supplier.type.list[12]',{id:null,name:null});
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        })
    };

    //列表
    function activatePage(page) {
        var listData = {
            page:page
        };
        typeSer.listType(listData).then(function(response){
            if(response.data.code==0){
                $scope.typeLists = response.data.data;
                if($stateParams.id){
                    angular.forEach($scope.typeLists,function(obj){
                        if(obj.id == $stateParams.id){
                            obj._selectList = true;
                        }
                    });
                    //向父Ctrl传递事件
                    $scope.$emit('changeId', $stateParams.id);
                }
            }else if(response.data.code==1){
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    }
    $scope.abili ={
        itemsCount: 12, //总条数
        take: 10, //每页显示
        activatePage: activatePage
    };
    typeSer.countType().then(function(response){
        if(response.data.code==0){
            $scope.abili.itemsCount = response.data.data;
        }else if(response.data.code==1){
            toastr.error( response.data.msg, '温馨提示');
        }
    });

    $scope.thaw = function(event){
        var data = {
            id :event.id
        };
        typeSer.thawType(data).then(function(response){
            if(response.data.code==0){
                event.status = "THAW"
            }else if(response.data.code==1){
                toastr.error( response.data.msg, '温馨提示');
            }

        })
    };
    //选择
    $scope.selectList = function(event){
        angular.forEach($scope.typeLists,function(obj){
            obj._selectList = false
        });
        event._selectList = true;
        $scope.idList = event.id;
        //向父Ctrl传递事件
        $scope.$emit('changeId', $scope.idList);
    };
    //查看更多
    $scope.moreList = function(event){
        angular.forEach($scope.typeLists,function(obj){
            if(event.id!==obj.id){
                obj._moreList = false
            }
        });
        event._moreList = !event._moreList;
    };
    //删除
    $scope.$on('deletedId',function(event,delid){
        angular.forEach($scope.typeLists,function(obj){
            if(obj.id == delid){
                obj._delete = true
            }
        })
    });
    //冻结
    $scope.$on('congealId',function(event,conid){
        angular.forEach($scope.typeLists,function(obj){
            if(obj.id == conid){
                obj.status = 'CONGEAL';
                obj._selectList = false;
            }
        })
    });
});

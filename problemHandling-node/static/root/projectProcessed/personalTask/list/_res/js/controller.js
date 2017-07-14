var app = angular.module('taskList', ['ng-pagination','toastr']);
app.controller('taskListCtrl',function($scope,taskSer,toastr,$stateParams,$state,$location){
    $scope.$emit('changeId', null);
    //监听切换搜索是否出现
    $scope.$on('iSsearch',function(event,newIs){
        $scope.isView = newIs;
    });
    //删除
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
        $state.go('' +
            'root.projectProcessed.personalTask.list[12]',{id:null,name:null});
    };

    var count=0;
    $scope.delFn = function(){//确认删除

        var data = {
            id:$stateParams.id
        };

        taskSer.deleteAssignment(data).then(function(response){
            if(response.data.code==0){
                count++;
                toastr.info( "信息已删除", '温馨提示');
                $scope.$emit('changeId', null);
                $scope.delShow = false;
                if(($scope.custom.itemsCount-count)%10){
                    $state.go('root.projectProcessed.personalTask.list[12]',{id:null,name:null});
                }else{
                    $state.go('root.projectProcessed.personalTask.list[12]',{id:null,name:null,page:$stateParams.page-1});
                }
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
    function activatePage(page) {
        var listData = {
            page:page || 1
        };
        taskSer.assignmentList(listData).then(function(response){
            if(response.data.code==0){
                $scope.assigneeLists = response.data.data;
                if($stateParams.id){
                    angular.forEach($scope.assigneeLists,function(obj){
                        if(obj.id == $stateParams.id){
                            obj._selectList = true;
                        }
                    });
                    //向父Ctrl传递事件
                    $scope.$emit('changeId', $stateParams.id);
                }
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });
        //搜索功能
        $scope.collect = function(){
            $scope.custom = {
                itemsCount: 2, //总条数
                take: 10, //每页显示
                activatePage: activatePage
            };
            var keywords = {
                internalProjectName: $scope.internalProjectName,
                handler: $scope.handler
            };
            taskSer.countAssignment(keywords).then(function (response) {
                if(response.data.code==0){
                    $scope.custom.itemsCount = response.data.data;
                    $scope.num = $stateParams.page*10>10?($stateParams.page-1)*10:null;
                }else{
                    toastr.error( response.data.msg, '温馨提示');
                }
            });
            var data = {
                internalProjectName: $scope.internalProjectName,
                handler: $scope.handler,
                page: page
            };
            taskSer.searchList(data).then(function(response){
                if(response.data.code == 0){
                    $scope.assigneeLists = response.data.data
                }else{
                    toastr.error( response.data.msg, '温馨提示');
                }
            });
        };
    }
    // 搜索功能字段
    $scope.titles = ['内部项目名称','处理人员'];
    $scope.selectList = function(event){
        angular.forEach($scope.assigneeLists,function(obj){
                obj._selectList = false
        });
        event._selectList = true;
        $scope.idListd = event.id;
        //向父Ctrl传递事件
        $scope.$emit('changeId', $scope.idListd);
        $scope.$emit('page',$location.search().page);
    };

    $scope.$on('deletedId',function(event,delid){
        angular.forEach($scope.assigneeLists,function(obj){
            if(obj.id == delid){
                obj._delete = delid
            }
        })
    });

//分页
    $scope.custom = {
        itemsCount: 2, //总条数
        take: 10, //每页显示
        activatePage: activatePage
    };

    taskSer.countAssignment().then(function(response){
        if(response.data.code==0){
            $scope.custom.itemsCount = response.data.data;
            $scope.num = $stateParams.page*10>10?($stateParams.page-1)*10:null;
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }
    })

});


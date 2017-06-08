var app = angular.module('taskList', ['ng-pagination','toastr']);
app.controller('taskListCtrl',function($scope,taskSer,toastr){
    $scope.$emit('changeId', null);
    //监听切换搜索是否出现
    $scope.$on('iSsearch',function(event,newIs){
        $scope.isView = newIs;
    });
    function activatePage(page) {
        var listData = {
            page:page
        };
        taskSer.assignmentList(listData).then(function(response){
            if(response.data.code==0){
                $scope.assigneeLists = response.data.data
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
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }
    })

});


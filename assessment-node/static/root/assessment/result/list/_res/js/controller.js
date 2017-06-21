var app = angular.module('resultList', ['ng-pagination','toastr']);
app.controller('resultListCtrl',function($scope,resultSer,toastr,$stateParams,$state) {
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
    $scope.cancel = function(){//取消删除/冻结
        $scope.delShow = false;
        $scope.congealShow = false;
        $state.go('root.assessment.result.list[12]',{id:null,name:null});
    };
    $scope.delFn = function(){//确认删除
        var data = {
            id:$stateParams.id
        };
        resultSer.deleteResult(data).then(function(response){
            if(response.data.code==0){
                toastr.info( "信息已删除", '温馨提示');
                $scope.deledId = $stateParams.id;
                $scope.$emit('changeId', null);
                $scope.delShow = false;
                $state.go('root.assessment.result.list[12]',{id:null,name:null});
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
    $scope.conFn = function(){//确认冻结
        var data = {
            id:$stateParams.id
        };
        resultSer.congealResult(data).then(function(response){
            if(response.data.code==0){
                toastr.info( "信息已冻结", '温馨提示');
                $scope.deledId = $stateParams.id;
                $scope.$emit('changeId', null);
                $scope.delShow = false;
                $state.go('root.assessment.result.list[12]',{id:null,name:null});
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        })
    };
    $scope.$emit('changeId', null);
    //分页
    function activatePage(page) {
        var listData = {
            page:page
        };
        resultSer.listResult(listData).then(function(response){
            if(response.data.code==0){
                $scope.resultLists = response.data
            }else if(response.data.code==1){
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    }
    $scope.abili = {
        itemsCount: 12, //总条数
        take: 10, //每页显示
        activatePage: activatePage
    };
    resultSer.countResult().then(function(response){
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
        resultSer.thawResult(data).then(function(response){
            if(response.data.code==0){
                event.status = "THAW"
            }else if(response.data.code==1){
                toastr.error( response.data.msg, '温馨提示');
            }

        })
    }
    //选择
    $scope.selectList = function(event){
        angular.forEach($scope.resultLists.data,function(obj){
            obj._selectList = false
        });
        event._selectList = true;
        $scope.idListd = event.id;
        //向父Ctrl传递事件
        $scope.$emit('changeId', $scope.idListd);
    };
    //查看更多
    $scope.moreList = function(event){
        angular.forEach($scope.resultLists.data,function(obj){
            if(event.id!==obj.id){
                obj._moreList = false
            }
        });
        event._moreList = !event._moreList;
    };
    //删除
    $scope.$on('deletedId',function(event,delid){
        angular.forEach($scope.resultLists.data,function(obj){
            if(obj.id == delid){
                obj._delete = true
            }
        })
    });
    //冻结
    $scope.$on('congealId',function(event,conid){
        angular.forEach($scope.resultLists.data,function(obj){
            if(obj.id == conid){
                obj.status = 'CONGEAL';
                obj._selectList = false;
            }
        })
    });
});

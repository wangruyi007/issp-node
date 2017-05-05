var app = angular.module('sortList', ['ng-pagination','toastr']);
app.controller('sortListCtrl',function($scope,toastr,sortSer){
    $scope.$emit('changeId', null);
    $scope.selectList = function(event){
        angular.forEach($scope.sortLists,function(obj){
            obj._selectList = false
        });
        event._selectList = true;
        //向父Ctrl传递事件
        $scope.$emit('changeId', event.id);
    };


    //分页
    $scope.custom = {
        itemsCount: 1,//总条数
        take: 10,        //每页显示
        activatePage: activatePage
    };

    function activatePage(page) {
        var listData = {
            page:page
        };
        sortSer.listSort(listData).then(function(response){
            if(response.data.code==0){
                $scope.sortLists = response.data.data
            }else{
                toastr.error( "请求超时，请联系管理员", '温馨提示');
            }
        })
    }
    sortSer.countSort().then(function(response){
        if(response.data.code==0){
            $scope.custom.itemsCount = response.data.data;
        }else{
            toastr.error( "请求超时，请联系管理员", '温馨提示');
        }
    })


    $scope.$on('deletedId',function(event,delid){
        angular.forEach($scope.sortLists,function(obj){
            if(obj.id == delid){
                obj._delete = true
            }
        })
    });
    //冻结
    $scope.$on('congealId',function(event,conid){
        angular.forEach($scope.sortLists,function(obj){
            if(obj.id == conid){
                obj.status = 'CONGEAL';
                obj._selectList = false;
            }
        })
    });

    //解冻
    $scope.thaw = function(event){
        var data = {
            id :event.id
        };
        sortSer.thawSort(data).then(function(response){
            if(response.data.code==0){
                event.status = "THAW"
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }

        })
    }
});



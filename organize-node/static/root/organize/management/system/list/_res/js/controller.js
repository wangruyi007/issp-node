var app = angular.module('systemList', ['ng-pagination','toastr']);
app.controller('systemListCtrl',function($scope,toastr,systemSer){
    $scope.$emit('changeId', null);

    $scope.selectList = function(event){
        angular.forEach($scope.systemLists,function(obj){
            obj._selectList = false
        });
        event._selectList = true;
        ;
        //向父Ctrl传递事件
        $scope.$emit('changeId', event.id);
    };
    //分页
    $scope.pagination = {
        itemsCount: 11,//总条数
        take: 10,        //每页显示
        activatePage: activatePage
    };
    function activatePage(page) {
        var pages = {
            page:page
        };
        systemSer.listSystem(pages).then(function(response){
            if(response.data.code==0){
                $scope.systemLists = response.data.data;
            }else{
                toastr.error( "请求超时，请联系管理员", '温馨提示');
            }
        });
    }
    systemSer.countSystem().then(function(response){
        if(response.data.code==0){
            $scope.pagination.itemsCount = response.data.data;
        }else{
            toastr.error( "请求超时，请联系管理员", '温馨提示');
        }
    });
    $scope.$on('deletedId',function(event,delid){
        angular.forEach($scope.systemLists,function(obj){
            if(obj.id == delid){
                obj._delete = delid
            }
        })
    });
    $scope.$on('congealId',function(event,conid){
        angular.forEach($scope.systemLists,function(obj){
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
        }
        systemSer.thawSystem(data).then(function(response){
          
            if(response.data.code==0){
                event.status = "THAW";
                toastr.success( event.serialNumber+"解冻成功", '温馨提示');
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }

        })
    }
});



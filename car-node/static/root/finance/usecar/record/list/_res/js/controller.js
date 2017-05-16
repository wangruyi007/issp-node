var app = angular.module('recordList', ['ng-pagination','toastr']);
app.controller('recordListCtrl',function($scope,toastr,usecarSer){
    // $scope.$emit('changeId', null);
    // $scope.selectList = function(event){
    //     angular.forEach($scope.angleLists,function(obj){
    //         obj._selectList = false
    //     });
    //     event._selectList = true;
    //     //向父Ctrl传递事件
    //     $scope.$emit('changeId', event.id);
    // };
    //
    //

    $scope.moreList = function(event){
        angular.forEach($scope.usecarLists,function(obj){
            if(event.id!==obj.id){
                obj._moreList = false
            }
        });
        event._moreList = !event._moreList;
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
        usecarSer.listUsecar(listData).then(function(response){
            if(response.data.code==0){
                $scope.usecarLists = response.data.data
            }else{
                toastr.error( "请求超时，请联系管理员", '温馨提示');
            }
        });
    }
    usecarSer.countRecord().then(function(response){
        if(response.data.code==0){
            $scope.custom.itemsCount = response.data.data;
        }else{
            toastr.error( "请求超时，请联系管理员", '温馨提示');
        }
    });
    //
    //
    // $scope.$on('deletedId',function(event,delid){
    //     angular.forEach($scope.angleLists,function(obj){
    //         if(obj.id == delid){
    //             obj._delete = true
    //         }
    //     })
    // });
    // //冻结
    // $scope.$on('congealId',function(event,conid){
    //     angular.forEach($scope.angleLists,function(obj){
    //         if(obj.id == conid){
    //             obj.status = 'CONGEAL';
    //             obj._selectList = false;
    //         }
    //     })
    // });
    //
    // //解冻
    // $scope.thaw = function(event){
    //     var data = {
    //         id :event.id
    //     };
    //     angleSer.thawAngle(data).then(function(response){
    //         if(response.data.code==0){
    //             event.status = "THAW"
    //         }else if(response.data.code==403){
    //             toastr.error( "请登录用户", '温馨提示');
    //         }
    //
    //     })
    // }
});



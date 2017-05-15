var app = angular.module('summaryList', ['ng-pagination','toastr']);
app.controller('summaryListCtrl',function($scope,summarySer,toastr){
    $scope.$emit('changeId', null);

    $scope.selectList = function(event){
        angular.forEach($scope.summaryLists,function(obj){
            obj._selectList = false
        });
        event._selectList = true;
        ;
        //向父Ctrl传递事件
        $scope.$emit('changeId', event.id);
    };

    $scope.moreList = function(event){
        angular.forEach($scope.summaryLists,function(obj){
            if(event.id!==obj.id){
                obj._moreList = false
            }
        });
        event._moreList = !event._moreList;
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
        summarySer.listBasicinfo(pages).then(function(response){
            if(response.data.code==0){
                $scope.summaryLists = response.data.data;
            }else{
                toastr.error( "请求超时，请联系管理员", '温馨提示');
            }
        });
    }
    summarySer.countBasicinfo().then(function(response){
        if(response.data.code==0){
            $scope.pagination.itemsCount = response.data.data;
        }else{
            toastr.error( "请求超时，请联系管理员", '温馨提示');
        }
    });
    $scope.$on('deletedId',function(event,delid){
        angular.forEach($scope.summaryLists,function(obj){
            if(obj.id == delid){
                obj._delete = delid
            }
        })
    });



})
;



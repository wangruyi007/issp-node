var app = angular.module('activityList', ['ng-pagination','toastr']);
app.controller('activityListCtrl',function($scope,activitySer,toastr){
    $scope.$emit('changeId', null);
    $scope.selectList = function(event){
        angular.forEach($scope.activityLists,function(obj){
            obj._selectList = false
        });
        event._selectList = true;
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
        activitySer.listActivity(pages).then(function(response){
            if(response.data.code==0){
                $scope.activityLists = response.data.data;
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    }
    $scope.moreList = function(event){
        angular.forEach($scope.activityLists,function(obj){
            if(event.id!==obj.id){
                obj._moreList = false
            }
        });
        event._moreList = !event._moreList;
    };
    activitySer.countActivity().then(function(response){
        if(response.data.code==0){
            $scope.pagination.itemsCount = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
});



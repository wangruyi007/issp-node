var app = angular.module('monthPlanList', ['ng-pagination','toastr']);
app.controller('monthPlanListCtrl',function($scope,monthPlanSer,toastr){
    $scope.$emit('changeId', null);
    function activatePage(page) {
        var listData = {
            page:page
        }
        monthPlanSer.monthPlanList(listData).then(function(response){
            if(response.data.code==0){
                $scope.monthPlanLists = response.data.data
            }else{
                toastr.error( "请求超时，请联系管理员", '温馨提示');
            }
        })
    }
    $scope.moreList = function(event){
        angular.forEach($scope.monthPlanLists,function(obj){
            if(event.id!==obj.id){
                obj._moreList = false
            }
        });
        event._moreList = !event._moreList;
    };

    $scope.selectList = function(event){
        angular.forEach($scope.monthPlanLists,function(obj){
                obj._selectList = false
        });
        event._selectList = true;
        $scope.idList = event.id;

        //向父Ctrl传递事件
        $scope.$emit('changeId', $scope.idList);
    };

    $scope.$on('deletedId',function(event,delid){
        angular.forEach($scope.monthPlanLists,function(obj){
            if(obj.id == delid){
                obj._delete = true
            }
        })
    });

//分页
    $scope.custom = {
        itemsCount: 4, //总条数
        take: 10, //每页显示
        activatePage: activatePage
    };

    monthPlanSer.countMonth().then(function(response){
        if(response.data.code==0){
            $scope.custom.monthCount = response.data.data
        } else {
            toastr.error( "请求超时，请联系管理员", '温馨提示');
        }
    });

});



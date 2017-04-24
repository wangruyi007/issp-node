var app = angular.module('weekPlanList', ['ng-pagination','toastr']);
app.controller('weekPlanListCtrl',function($scope,weekPlanSer,toastr){
    function activatePage(page) {
        var listData = {
            page:page
        }
        weekPlanSer.weekPlanList(listData).then(function(response){

            if(response.data.code==0){

                $scope.weekPlanLists = response.data.data
            }else{
                toastr.error( "请求超时，请联系管理员", '温馨提示');
            }
        })
    }
    $scope.selectList = function(event){
        angular.forEach($scope.weekPlanLists,function(obj){
                obj._selectList = false
        });
        event._selectList = true;
        $scope.idListd = event.id;
        //向父Ctrl传递事件
        $scope.$emit('changeId', $scope.idListd);

    };
    $scope.moreList = function(event){
        angular.forEach($scope.weekPlanLists,function(obj){
            if(event.id!==obj.id){
                obj._moreList = false
            }
        });
        event._moreList = !event._moreList;
    };
    $scope.$on('deletedId',function(event,delid){

        angular.forEach($scope.weekPlanLists,function(obj){

            if(obj.id == delid){
                obj._delete = delid
            }
        })
    });

//分页
    $scope.custom = {
        itemsCount: 3, //总条数
        take: 10, //每页显示
        activatePage: activatePage
    };
    weekPlanSer.countWeek().then(function(response){
        if(response.data.code==0){
            $scope.custom.weekCount = response.data.data;
        }else{
            toastr.error( "请求超时，请联系管理员", '温馨提示');
        }
    })
});



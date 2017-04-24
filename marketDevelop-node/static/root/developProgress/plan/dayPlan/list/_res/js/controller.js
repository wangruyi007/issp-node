var app = angular.module('dayPlanList', ['ng-pagination','toastr']);
app.controller('dayPlanListCtrl',function($scope,dayPlanSer,toastr){
    // 点击更多详细
    $scope.moreList = function(event){
        angular.forEach($scope.dayPlanLists,function(obj){
            if(event.id!==obj.id){
                obj._moreList = false
            }
        });
        event._moreList = !event._moreList;
    };
    $scope.selectList = function(event){
        angular.forEach($scope.dayPlanLists,function(obj){
                obj._selectList = false
        });
        event._selectList = true;
        $scope.idListd = event.id;
        //向父Ctrl传递事件
        $scope.$emit('changeId', $scope.idListd);

    };
    $scope.$on('deletedId',function(event,delid){
        angular.forEach($scope.dayPlanLists,function(obj){

            if(obj.id == delid){
                obj._delete = delid
            }
        })
    });

//分页
    $scope.custom = {
        dayCount: 6, //总条数
        take: 10, //每页显示
        activatePage: activatePage
    };
    dayPlanSer.countDay().then(function(response){
        if(response.data.code==0){
            $scope.custom.dayCount = response.data.data
        } else {
            toastr.error( "请求超时，请联系管理员", '温馨提示');
        }
    });

    function activatePage(page) {
        var listData = {
            page:page
        }
        dayPlanSer.dayPlanList(listData).then(function(response){
            console.log(listData);
            if(response.data.code==0){
                $scope.dayPlanLists = response.data.data
                console.log($scope.dayPlanLists);
            }else{
                toastr.error( "请求超时，请联系管理员", '温馨提示');
            }
        })
    }
});



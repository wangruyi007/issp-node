var app = angular.module('courseCollectList', ['ng-pagination','toastr']);
app.controller('courseCollectListCtrl',function($scope,courseCollectSer,toastr) {

   //选择
    $scope.selectList = function(event){
        angular.forEach($scope.courseCollectLists,function(obj){
            obj._selectList = false
        });
        event._selectList = true;
        $scope.idList = event.id;
        //向父Ctrl传递事件
        $scope.$emit('changeId', $scope.idList);
    };

    function activatePage(page) {
        var listData = {
            page:page
        }
        courseCollectSer.subjectsList(listData).then(function(response){
            if(response.data.code==0){
                $scope.courseCollectLists = response.data.data
            }else{
                toastr.error( "请求超时，请联系管理员", '温馨提示');
            }
        });
    }
    $scope.abili = {
        itemsCount: 1, //总条数
        take: 10, //每页显示
        activatePage: activatePage
    };
    courseCollectSer.countCourseCollect().then(function(response){
        if(response.data.code == 0){
            $scope.abili.itemsCount = response.data;
        }else{
            toastr.error( "请求超时，请联系管理员", '温馨提示');
        }
    });
    // 删除
    $scope.$on('deletedId',function(event,delid){
        angular.forEach($scope.courseCollectLists.data,function(obj){
            if(obj.id == delid){
                obj._delete = true
            }
        })
    });
});

var app = angular.module('subjectsList', ['ng-pagination','toastr']);
app.controller('subjectsListCtrl',function($scope,directionSer,toastr){
    function activatePage(page) {
        var listData = {
            page:page
        }
        directionSer.listCourse(listData).then(function(response){
            if(response.data.code==0){
                $scope.courseLists = response.data.data
            }else{
                toastr.error( "请求超时，请联系管理员", '温馨提示');
            }
        });
    }

    $scope.selectList = function(event){
        angular.forEach($scope.courseLists,function(obj){
                obj._selectList = false
        });
        event._selectList = true;
        $scope.idListd = event.id;
        //向父Ctrl传递事件
        $scope.$emit('changeId', $scope.idListd);

    };

    $scope.$on('deletedId',function(event,delid){

        angular.forEach($scope.courseLists,function(obj){

            if(obj.id == delid){
                obj._delete = delid
            }
        })
    });
    //冻结
    $scope.$on('congealId',function(event,conid){
        angular.forEach($scope.courseLists,function(obj){
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
        directionSer.thawCourse(data).then(function(response){
            if(response.data.code==0){
                event.status = "THAW"
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }

        })
    }

//分页
    $scope.custom = {
        itemsCount: 6, //总条数
        take: 10, //每页显示
        activatePage: activatePage
    };

    directionSer.countCourse().then(function(response){
        if(response.data.code==0){
            $scope.custom.itemsCount = response.data.data;
        }else{
            toastr.error( "请求超时，请联系管理员", '温馨提示');
        }
    })

});


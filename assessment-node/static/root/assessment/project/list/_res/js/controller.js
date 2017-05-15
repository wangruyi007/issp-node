var app = angular.module('projectList', ['ng-pagination','toastr']);
app.controller('projectListCtrl',function($scope,projectSer,toastr){
    $scope.$emit('changeId', null);
    $scope.teamInfo = {};
    function activatePage(page) {
        var listData = {
            page:page
        }
        projectSer.listProject(listData).then(function(response){
            if(response.data.code==0){
                $scope.projectLists = response.data.data
            }else{
                toastr.error( "请求超时，请联系管理员", '温馨提示');
            }
        });
    }

    $scope.selectList = function(event){
        angular.forEach($scope.projectLists,function(obj){
                obj._selectList = false
        });
        event._selectList = true;
        $scope.idListd = event.id;
        //向父Ctrl传递事件
        $scope.$emit('changeId', $scope.idListd);

    };
    //点击更多详细
    $scope.moreList = function(event){
        angular.forEach($scope.projectLists,function(obj){
            if(event.id!==obj.id){
                obj._moreList = false
            }
        });
        event._moreList = !event._moreList;
    };
    $scope.$on('deletedId',function(event,delid){
        angular.forEach($scope.projectLists,function(obj){
            if(obj.id == delid){
                obj._delete = delid
            }
        })
    });

//分页
    $scope.abili = {
        itemsCount: 2, //总条数
        take: 10, //每页显示
        activatePage: activatePage
    };

    projectSer.countProject().then(function(response){
        if(response.data.code==0){
            $scope.abili.itemsCount = response.data.data;
        }else{
            toastr.error( "请求超时，请联系管理员", '温馨提示');
        }
    })

});


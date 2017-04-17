var app = angular.module('levelList', ['ng-pagination','toastr']);
app.controller('levelListCtrl',function($scope,levelSer,toastr){
    levelSer.listCustomerLevel().then(function(response){
        if(response.data.code==0){
            $scope.levelLists = response.data.data;
        }
    });

    $scope.selectList = function(event){
        angular.forEach($scope.levelLists,function(obj){
            obj._selectList = false
        });
        event._selectList = true;
        $scope.idList = event.id;
        $scope.levelName = event.name;
        //向父Ctrl传递事件
        $scope.$emit('changeId', $scope.idList);
        $scope.$emit('changeLevelName', $scope.levelName);
    }

    $scope.$on('deletedId',function(event,delid){
        angular.forEach($scope.levelLists,function(obj){
            if(obj.id == delid){
                obj._delete = true
            }
        })
    })
});



var app = angular.module('handleList', ['ng-pagination','toastr']);
app.controller('handleListCtrl',function($scope,handleSer,toastr,$stateParams,$state){
    //获取id
    if($stateParams.id){
        switch ($stateParams.name){
            case 'delete':
                $scope.delShow = true;
                break;
        }
    }
    //删除
    $scope.cancel = function(){//取消删除
        $scope.delShow = false;
        $state.go('root.assessment.handle.list[12]',{id:null,name:null});
    };
    $scope.delYes = function(){
        var data = {
            id :$stateParams.id
        };
        handleSer.deleteHand(data).then(function(response){
            if(response.data.code==0){
                toastr.info( "信息已删除", '温馨提示');
                $scope.deledId = $stateParams.id;
                $state.go('root.assessment.handle.list[12]',{id:null,name:null});
                $scope.$emit('changeId', null);
                $scope.delShow = false;
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        })
    }
    $scope.$emit('changeId', null);
    $scope.teamInfo = {};
    function activatePage(page) {
        var listData = {
            page:page
        }
        handleSer.listHand(listData).then(function(response){
            if(response.data.code==0){
                $scope.handleLists = response.data.data
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    }

    $scope.selectList = function(event){
        angular.forEach($scope.handleLists,function(obj){
                obj._selectList = false
        });
        event._selectList = true;
        $scope.idListd = event.id;
        //向父Ctrl传递事件
        $scope.$emit('changeId', $scope.idListd);

    };
    //点击更多详细
    $scope.moreList = function(event){
        angular.forEach($scope.handleLists,function(obj){
            if(event.id!==obj.id){
                obj._moreList = false
            }
        });
        event._moreList = !event._moreList;
    };
    $scope.$on('deletedId',function(event,delid){
        angular.forEach($scope.handleLists,function(obj){
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

    handleSer.countHand().then(function(response){
        if(response.data.code==0){
            $scope.abili.itemsCount = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    })
});


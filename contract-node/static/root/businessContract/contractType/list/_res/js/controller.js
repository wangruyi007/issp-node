var app = angular.module('contractTypeList', ['ng-pagination','toastr']);
app.controller('contractListCtrl',function($scope,contractSer,toastr,$stateParams,$state){
    $scope.$emit('changeId', null);
    //获取id
    if($stateParams.id){
        switch ($stateParams.name){
            case 'delete':
                $scope.delShow = true;
                break;
        }
    }
    $scope.cancel = function(){//取消删除
        $scope.delShow = false;
        $state.go('root.businessContract.contractType.list[12]',{id:null,name:null});
    };
    $scope.delFn = function(){//确认删除
        var data = {
            id:$stateParams.id
        };
        contractSer.deleteContract(data).then(function(response){
            if(response.data.code==0){
                toastr.info( "信息已删除", '温馨提示');
                $scope.deledId = $stateParams.id;
                $scope.$emit('changeId', null);
                $scope.delShow = false;
                $state.go('root.businessContract.contractType.list[12]',{id:null,name:null});
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
    function activatePage(page) {
        var listData = {
            page:page
        };
        contractSer.contractList(listData).then(function(response){
            if(response.data.code==0){
                $scope.contractLists = response.data.data;
                if($stateParams.id){
                    angular.forEach($scope.contractLists,function(obj){
                        if(obj.id == $stateParams.id){
                            obj._selectList = true;
                        }
                    });
                    //向父Ctrl传递事件
                    $scope.$emit('changeId', $stateParams.id);
                }
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    }

    $scope.selectList = function(event){
        angular.forEach($scope.contractLists,function(obj){
                obj._selectList = false
        });
        event._selectList = true;
        $scope.idListd = event.id;
        //向父Ctrl传递事件
        $scope.$emit('changeId', $scope.idListd);

    };

    $scope.$on('deletedId',function(event,delid){
        angular.forEach($scope.contractLists,function(obj){
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

    contractSer.countContract().then(function(response){
        if(response.data.code==0){
            $scope.custom.itemsCount = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    })

});


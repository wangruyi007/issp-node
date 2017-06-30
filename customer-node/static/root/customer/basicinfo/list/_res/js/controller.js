var app = angular.module('basicinfoList', ['ng-pagination','toastr']);
app.controller('basicinfoListCtrl',function($scope,basicinfoSer,toastr,$stateParams,$state){
    $scope.$emit('changeId', null);

    //获取id
    if($stateParams.id){
        switch ($stateParams.name){
            case 'delete':
                $scope.delShow = true;
                break;
            case 'congeal':
                $scope.congealShow = true;
                break;
        }
    }
    $scope.cancel = function(){//取消删除/解冻
        $scope.delShow = false;
        $scope.congealShow = false;
        $state.go('root.customer.basicinfo.list[12]',{id:null,name:null});
    };
    $scope.delFn = function(){//确认删除
        var data = {
            id:$stateParams.id
        };
        basicinfoSer.deleteCustomerbaseinfo(data).then(function(response){
            if(response.data.code==0){
                toastr.info( "信息已删除", '温馨提示');
                $scope.deledId = $stateParams.id;
               //$scope.$emit('deletedId', $scope.deledId)
                $scope.$emit('changeId', null);
                $scope.delShow = false;
                $state.go('root.customer.basicinfo.list[12]',{id:null,name:null});
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };

    $scope.conFn = function(){//确认冻结
        var data = {
            id:$stateParams.id
        };
        basicinfoSer.congealCustomerbaseinfo(data).then(function(response){
            if(response.data.code==0){
                toastr.info( "信息已冻结", '温馨提示');
               $scope.deledId = $stateParams.id;
              // $scope.$emit('deletedId', $scope.deledId)
                $scope.$emit('changeId', null);
                $scope.delShow = false;
                $state.go('root.customer.basicinfo.list[12]',{id:null,name:null});
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        })
    };
    //--------------------------------------------------------------------------------
    $scope.$emit('changeCusnum', null)
    $scope.moreList = function(event){
        angular.forEach($scope.basicinfoLists,function(obj){
            if(event.id!==obj.id){
                obj._moreList = false
            }
        });
        event._moreList = !event._moreList;
    };

    $scope.selectList = function(event){
        angular.forEach($scope.basicinfoLists,function(obj){
            obj._selectList = false
        });
        event._selectList = true;
        $scope.idList = event.id;
        $scope.cusNum = event.customerNum;
        //向父Ctrl传递事件
        $scope.$emit('changeId', $scope.idList);
        $scope.$emit('changeCusnum', $scope.cusNum)
    }


    //解冻
    $scope.thaw = function(event){
        var data = {
            id :event.id
        }
        basicinfoSer.thawCustomerbaseinfo(data).then(function(response){
            if(response.data.code==0){
                event.status = "THAW"
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }

        })
    }

    //分页
    $scope.custom = {
        itemsCount: 11, //总条数
        take: 10,        //每页显示
        activatePage: activatePage
    };


    function activatePage(page) {
        var listData = {
            page:page
        }
        basicinfoSer.listCustomerBaseInfo(listData).then(function(response){
            if(response.data.code==0){
                $scope.basicinfoLists = response.data.data;

            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        })
    }
    basicinfoSer.countBaseInfo().then(function(response){
        if(response.data.code==0){
            $scope.custom.itemsCount = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    })


    $scope.$on('deletedId',function(event,delid){
       angular.forEach($scope.basicinfoLists,function(obj){
        if(obj.id == delid){
            obj._delete = delid
        }
       })
    });

    $scope.$on('congealId',function(event,conid){
        angular.forEach($scope.basicinfoLists,function(obj){
            if(obj.id == conid){
                obj.status = 'CONGEAL';
                obj._selectList = false;
            }
        })
    });
})
;



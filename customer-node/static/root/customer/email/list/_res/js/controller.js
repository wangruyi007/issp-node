var app = angular.module('emailList', ['ng-pagination','toastr','ipCookie']);
app.controller('emailListCtrl',function($scope,emailSer,toastr,ipCookie,$location,$stateParams,$state){

    $scope.$emit('changeId', null);
    //监听切换搜索是否出现
    $scope.$on('iSsearch',function(event,newIs){
        $scope.isView = newIs;
    });
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
        $state.go('root.customer.email.list[12]',{id:null,name:null});
    };
    $scope.delFn = function(){//确认删除
        var data = {
            id:$stateParams.id
        };
        emailSer.deleteEmail(data).then(function(response){
            if(response.data.code==0){
                toastr.info( "信息已删除", '温馨提示');
                $scope.deledId = $stateParams.id;
                $scope.$emit('changeId', null);
                $scope.delShow = false;
                $state.go('root.customer.email.list[12]',{id:null,name:null});
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };

    $scope.conFn = function(){//确认冻结
        var data = {
            id:$stateParams.id
        };
        emailSer.congealEmail(data).then(function(response){
            if(response.data.code==0){
                toastr.info( "信息已冻结", '温馨提示');
                $scope.deledId = $stateParams.id;
                $scope.$emit('changeId', null);
                $scope.delShow = false;
                $state.go('root.customer.email.list[12]',{id:null,name:null});
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        })
    };

    $scope.$emit('changeId', null);
    //分页
    $scope.custom = {
        itemsCount: 11,  //总条数
        take: 10,        //每页显示
        activatePage: activatePage
    };


    function activatePage(page) {
        var listData = {
            page:page
        }
        emailSer.listEmail(listData).then(function(response){
            if(response.data.code==0){
                $scope.emailLists = response.data.data;
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        })
    }

    emailSer.emailCount().then(function(response){
        if(response.data.code==0){
            $scope.custom.itemsCount = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    })

    $scope.moreList = function(event){
        angular.forEach($scope.emailLists,function(obj){
            if(event.id!==obj.id){
                obj._moreList = false
            }
        });
        event._moreList = !event._moreList;
    };
    $scope.selectList = function(event){
        angular.forEach($scope.emailLists,function(obj){
            obj._selectList = false
        });
        event._selectList = true;
        $scope.idList = event.id;
        //向父Ctrl传递事件
        $scope.$emit('changeId', $scope.idList);
    }

    $scope.$on('deletedId',function(event,delid){
        angular.forEach($scope.emailLists,function(obj){
            if(obj.id == delid){
                obj._delete = true
            }
        })
    });
    $scope.$on('congealId',function(event,conid){
        angular.forEach($scope.emailLists,function(obj){
            if(obj.id == conid){
                obj.status = 'CONGEAL';
                obj._selectList = false;
            }
        })
    })
    $scope.thaw = function(event){
        var data = {
            id :event.id
        }
        emailSer.thawEmail(data).then(function(response){
            if(response.data.code==0){
                event.status = "THAW"
            }

        })
    }
});



var app = angular.module('dispatchWorkList', ['ng-pagination','toastr']);
app.controller('dispatchWorkCtrl',function($scope,dispatchSer,toastr,$stateParams,$state){
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
        }
    }
    $scope.cancel = function(){//取消删除
        $scope.delShow = false;
        $state.go('root.businessContract.dispatchList.list[12]',{id:null,name:null});
    };
    $scope.delFn = function(){//确认删除
        var data = {
            id:$stateParams.id
        };
        dispatchSer.deleteDispatchWorkers(data).then(function(response){
            if(response.data.code==0){
                toastr.info( "信息已删除", '温馨提示');
                $scope.deledId = $stateParams.id;
                $scope.$emit('changeId', null);
                $scope.delShow = false;
                $state.go('root.businessContract.dispatchList.list[12]',{id:null,name:null});
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
    function activatePage(page) {
        var listData = {
            page:page
        };
        dispatchSer.dispatchWorkersList(listData).then(function(response){
            if(response.data.code==0){
                $scope.dispatchLists = response.data.data;
                if($stateParams.id){
                    angular.forEach($scope.dispatchLists,function(obj){
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
        //搜索功能
        $scope.collect = function(){

            $scope.custom = {
                itemsCount: 2, //总条数
                take: 10, //每页显示
                activatePage: activatePage
            };
            var keywords = {
                innerProject: $scope.innerProject,
                outProjectNum: $scope.outProjectNum,
                saleContractNum: $scope.saleContractNum,
                businessType: $scope.businessType,
                businessSubject: $scope.businessSubject,
                businessCooperate: $scope.businessCooperate,
                majorCompany: $scope.majorCompany,
                subCompany: $scope.subCompany,
                area: $scope.area,
                dispatchProject: $scope.dispatchProject,
                dispatchNum: $scope.dispatchNum
            };
            dispatchSer.countDispatchWorkers(keywords).then(function (response) {
                if(response.data.code==0){
                    $scope.custom.itemsCount = response.data.data;
                }else{
                    toastr.error( response.data.msg, '温馨提示');
                }
            });
            var data = {
                innerProject: $scope.innerProject,
                outProjectNum: $scope.outProjectNum,
                saleContractNum: $scope.saleContractNum,
                businessType: $scope.businessType,
                businessSubject: $scope.businessSubject,
                businessCooperate: $scope.businessCooperate,
                majorCompany: $scope.majorCompany,
                subCompany: $scope.subCompany,
                area: $scope.area,
                dispatchProject: $scope.dispatchProject,
                dispatchNum: $scope.dispatchNum,
                page: page
            };
            dispatchSer.dispatchWorkersList(data).then(function(response){
                if(response.data.code == 0){
                    $scope.dispatchLists = response.data.data
                }else{
                    toastr.error( response.data.msg, '温馨提示');
                }
            });
        };
    }
    // 搜索功能
    $scope.titles = ['内部项目名称','合同外部编号','对应销售合同号','业务类型','业务方向科目','合作方式','总包单位名称','分包单位名称','地区','合同属性','立项情况'];
    $scope.selectList = function(event){
        angular.forEach($scope.dispatchLists,function(obj){
                obj._selectList = false
        });
        event._selectList = true;
        $scope.idListd = event.id;
        //向父Ctrl传递事件
        $scope.$emit('changeId', $scope.idListd);

    };
    //点击更多详细
    $scope.moreList = function(event){
        angular.forEach($scope.dispatchLists,function(obj){
            if(event.id!==obj.id){
                obj._moreList = false
            }
        });
        event._moreList = !event._moreList;
    };

    $scope.$on('deletedId',function(event,delid){
        angular.forEach($scope.dispatchLists,function(obj){
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

    dispatchSer.countDispatchWorkers().then(function(response){
        if(response.data.code==0){
            $scope.custom.itemsCount = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    })

});


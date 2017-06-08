var app = angular.module('dispatchWorkList', ['ng-pagination','toastr']);
app.controller('dispatchWorkCtrl',function($scope,dispatchSer,toastr){
    $scope.$emit('changeId', null);
    //监听切换搜索是否出现
    $scope.$on('iSsearch',function(event,newIs){
        $scope.isView = newIs;
    });
    function activatePage(page) {
        var listData = {
            page:page
        };
        dispatchSer.dispatchWorkersList(listData).then(function(response){
            if(response.data.code==0){
                $scope.dispatchLists = response.data.data
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
    $scope.titles = ['业务类型','业务方向科目','合作方式','总包单位名称','分包单位名称','地区','合同属性','立项情况'];
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


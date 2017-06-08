var app = angular.module('basicInfoList', ['ng-pagination','toastr']);
app.controller('basicListCtrl',function($scope,basicSer,toastr){
    $scope.$emit('changeId', null);
    //监听切换搜索是否出现
    $scope.$on('iSsearch',function(event,newIs){
        $scope.isView = newIs;
    });
    function activatePage(page) {
        var listData = {
            page:page
        };
        basicSer.basicInfoList(listData).then(function(response){
            if(response.data.code==0){
                $scope.basicLists = response.data.data
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
                firstCompany: $scope.firstCompany,
                secondCompany: $scope.secondCompany,
                area: $scope.area,
                contractProperty: $scope.contractProperty,
                payWays: $scope.payWays,
                customerName: $scope.customerName,
                siginYear: $scope.siginYear,
                fileCondition: $scope.fileCondition
            };
            basicSer.countBasicInfo(keywords).then(function (response) {
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
                firstCompany: $scope.firstCompany,
                secondCompany: $scope.secondCompany,
                area: $scope.area,
                contractProperty: $scope.contractProperty,
                payWays: $scope.payWays,
                customerName: $scope.customerName,
                siginYear: $scope.siginYear,
                fileCondition: $scope.fileCondition,
                page: page
            };
            basicSer.basicInfoList(data).then(function(response){
                if(response.data.code == 0){
                    $scope.basicLists = response.data.data
                }else{
                    toastr.error( response.data.msg, '温馨提示');
                }
            });
        };
    }
    // 搜索功能字段
    $scope.titles = ['业务类型','业务方向科目','合作方式','甲方公司名称','乙方公司名称','地区','合同属性','支付方式','客户名称','签订年份','合同是否已归档'];
    $scope.selectList = function(event){
        angular.forEach($scope.basicLists,function(obj){
                obj._selectList = false
        });
        event._selectList = true;
        $scope.idListd = event.id;
        //向父Ctrl传递事件
        $scope.$emit('changeId', $scope.idListd);

    };
    //点击更多详细
    $scope.moreList = function(event){
        angular.forEach($scope.basicLists,function(obj){
            if(event.id!==obj.id){
                obj._moreList = false
            }
        });
        event._moreList = !event._moreList;
    };

    $scope.$on('deletedId',function(event,delid){
        angular.forEach($scope.basicLists,function(obj){
            if(obj.id == delid){
                obj._delete = delid
            }
        })
    });

//分页
    $scope.custom = {
        itemsCount: 2, //总条数
        take: 10, //每页显示
        activatePage: activatePage
    };

    basicSer.countBasicInfo().then(function(response){
        if(response.data.code==0){
            $scope.custom.itemsCount = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    })

});


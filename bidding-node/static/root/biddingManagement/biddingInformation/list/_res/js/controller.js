var app = angular.module('infoList', ['ng-pagination','toastr']);
app.controller('infoListCtrl',function($scope,infoSer,toastr){
    $scope.$emit('changeId', null);
    //监听切换搜索是否出现
    $scope.$on('iSsearch',function(event,newIs){
        $scope.isView = newIs;
    });
    function activatePage(page) {
        var listData = {
            page:page
        };
        infoSer.infoList(listData).then(function(response){
            if(response.data.code==0){
                $scope.infoLists = response.data.data
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
        //搜索功能
        $scope.collect = function(){
            console.log(123)
            $scope.custom = {
                itemsCount: 2, //总条数
                take: 10, //每页显示
                activatePage: activatePage
            };
            var keywords = {
                webName: $scope.webName,
                url: $scope.url,
                provinces: $scope.provinces,
                cities: $scope.cities
            };
            infoSer.countInfo(keywords).then(function (response) {
                if(response.data.code==0){
                    $scope.custom.itemsCount = response.data.data;
                }else{
                    toastr.error( response.data.msg, '温馨提示');
                }
            });
            var data = {
                webName: $scope.webName,
                url: $scope.url,
                provinces: $scope.provinces,
                cities: $scope.cities,
                page: page
            };
            infoSer.searchList(data).then(function(response){
                if(response.data.code == 0){
                    $scope.infoLists = response.data.data
                }else{
                    toastr.error( response.data.msg, '温馨提示');
                }
            });
        };
    }
    // 搜索功能字段
    $scope.titles = ['网站名称','网址','省份','地市'];
    $scope.selectList = function(event){
        angular.forEach($scope.infoLists,function(obj){
                obj._selectList = false
        });
        event._selectList = true;
        $scope.idListd = event.id;
        //向父Ctrl传递事件
        $scope.$emit('changeId', $scope.idListd);

    };
    //点击更多详细
    $scope.moreList = function(event){
        angular.forEach($scope.infoLists,function(obj){
            if(event.id!==obj.id){
                obj._moreList = false
            }
        });
        event._moreList = !event._moreList;
    };
    $scope.$on('deletedId',function(event,delid){
        angular.forEach($scope.infoLists,function(obj){
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

    infoSer.countInfo().then(function(response){
        if(response.data.code==0){
            $scope.custom.itemsCount = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    })

});


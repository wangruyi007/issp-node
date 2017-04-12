var app = angular.module('basicinfoList', ['ng-pagination','toastr']);
app.controller('basicinfoListCtrl',function($scope,basicinfoSer,toastr){


    $scope.moreList = function(event){
        angular.forEach($scope.basicinfoLists.data,function(obj){
            if(event.id!==obj.id){
                obj._moreList = false
            }
        });
        event._moreList = !event._moreList;
    };

    $scope.selectList = function(event){
        angular.forEach($scope.basicinfoLists.data,function(obj){
                obj._selectList = false
        });
        event._selectList = true
    }

    //冻结
    $scope.congeal = function(event){
        var data = {
            id :event.id
        }
        basicinfoSer.congealCustomerbaseinfo(data).then(function(response){
            if(response.data.code==0){
                event.status = "CONGEAL";
                event._selectList = false;
                toastr.success( event.customerName +"已冻结", '温馨提示');
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }
        })
    }
    //解冻
    $scope.thaw = function(event){
        var data = {
            id :event.id
        }
        basicinfoSer.thawCustomerbaseinfo(data).then(function(response){
            if(response.data.code==0){
                event.status = "THAW"
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }

        })
    }
    //删除
    $scope.delete = function(event){


        var data = {
            id :event.id
        }
        basicinfoSer.deleteCustomerbaseinfo(data).then(function(response){
            if(response.data.code==0){
                event._delete = true;
                toastr.info( event.customerName +"已删除", '温馨提示');
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }
        })
    }


//分页
    $scope.custom = {
        itemsCount: 11,
        take: 10,
        activatePage: activatePage
    };


    function activatePage(page) {
        var listData = {
            page:page
        }
        basicinfoSer.listCustomerBaseInfo(listData).then(function(response){
            if(response.data.code==0){
                $scope.basicinfoLists = response.data
            }else{
                toastr.error( "请求超时，请联系管理员", '温馨提示');
            }
        })
    }
    basicinfoSer.countBaseInfo().then(function(response){
        if(response.data.code==0){
            $scope.custom.itemsCount = response.data.data;
        }else{
            toastr.error( "请求超时，请联系管理员", '温馨提示');
        }
    })


})
;



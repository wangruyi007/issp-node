var app = angular.module('emailList', ['ng-pagination','toastr','ipCookie']);
app.controller('emailListCtrl',function($scope,emailSer,toastr,ipCookie,$location){
    $scope.$emit('changeId', null);
    //分页
    $scope.custom = {
        itemsCount: 11,//总条数
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
                toastr.error( "请求超时，请联系管理员", '温馨提示');
            }
        })
    }

    emailSer.emailCount().then(function(response){
        if(response.data.code==0){
            $scope.custom.itemsCount = response.data.data;
        }else{
            toastr.error( "请求超时，请联系管理员", '温馨提示');
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
            }else if(response.data.code==403||response.data.code==401){
                toastr.error( "请登录用户,2秒后跳至登陆页面", '温馨提示');
                var absurl = $location.absUrl();
                ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes' });
                setTimeout(function(){
                    window.location.href='http://localhost/login'
                },2000)
            }

        })
    }
});



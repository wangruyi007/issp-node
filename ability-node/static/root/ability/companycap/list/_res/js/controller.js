var app = angular.module('companycapList', ['ng-pagination','toastr','ipCookie']);
app.controller('companycapListCtrl',function($scope,companycapSer,toastr,ipCookie,$location) {
   //选择
    $scope.selectList = function(event){
        angular.forEach($scope.companycapLists.data,function(obj){
            obj._selectList = false
        });
        event._selectList = true;
        $scope.idList = event.id;
        //向父Ctrl传递事件
        $scope.$emit('changeId', $scope.idList);
    };
    //查看更多
    $scope.moreList = function(event){
        angular.forEach($scope.companycapLists.data,function(obj){
            if(event.id!==obj.id){
                obj._moreList = false
            }
        });
        event._moreList = !event._moreList;
    };
    function activatePage(page) {
        var listData = {
            page:page
        };
        companycapSer.listAbilityCompanyCap(listData).then(function(response){
            if(response.data.code==0){
                $scope.companycapLists = response.data
            }else if (response.data.code == 403||response.data.code==401) {
                toastr.error( "请登录用户,3秒后跳至登陆页面", '温馨提示');
                var absurl = $location.absUrl();
                ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes',domain:'issp.bjike.com' })
                setTimeout(function(){
                    window.location.href='http://localhost/login'
                },3000)
            }
        });
        $scope.collect = function(){
            $scope.abili = {
                itemsCount: 12,//总条数
                take: 10,        //每页显示
                activatePage: activatePage, //当前页
            };
            companycapSer.countBaseInfo2($scope.company).then(function (response) {
                if(response.data.code==0){
                    $scope.abili.itemsCount = response.data.data;
                }else if (response.data.code == 403||response.data.code==401) {
                    toastr.error( "请登录用户,3秒后跳至登陆页面", '温馨提示');
                    var absurl = $location.absUrl();
                    ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes',domain:'issp.bjike.com' })
                    setTimeout(function(){
                        window.location.href='http://localhost/login'
                    },3000)
                }
            })
            var data = {
                company: $scope.company,
                page: page
            };
            companycapSer.searchCompanyAbility(data).then(function(response){
                if(response.data.code == 0){
                    $scope.companycapLists = response.data
                }else if (response.data.code == 403||response.data.code==401) {
                    toastr.error( "请登录用户,3秒后跳至登陆页面", '温馨提示');
                    var absurl = $location.absUrl();
                    ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes',domain:'issp.bjike.com' })
                    setTimeout(function(){
                        window.location.href='http://localhost/login'
                    },3000)
                }
            });
        };
    }
    $scope.abili = {
        itemsCount: 14, //总条数
        take: 10, //每页显示
        activatePage: activatePage
    };
    companycapSer.countBaseInfo().then(function(response){
        if(response.data.code==0){
            $scope.abili.itemsCount = response.data.data;
        }else if (response.data.code == 403||response.data.code==401) {
            toastr.error( "请登录用户,3秒后跳至登陆页面", '温馨提示');
            var absurl = $location.absUrl();
            ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes',domain:'issp.bjike.com' })
            setTimeout(function(){
                window.location.href='http://localhost/login'
            },3000)
        }
    });
    //删除
    $scope.$on('deletedId',function(event,delid){
        angular.forEach($scope.companycapLists.data,function(obj){
            if(obj.id == delid){
                obj._delete = true
            }
        })
    });
});

var app = angular.module('informationList', ['ng-pagination','toastr','ipCookie']);
app.controller('informationListCtrl',function($scope,informationSer,toastr,ipCookie,$location) {
    $scope.companySearchFun = function(){
        $scope.teamInfo = {};
    };
   //选择
    $scope.selectList = function(event){
        angular.forEach($scope.informationLists,function(obj){
            obj._selectList = false
        });
        event._selectList = true;
        $scope.idList = event.id;
        //向父Ctrl传递事件
        $scope.$emit('changeId', $scope.idList);
    };
    //查看更多
    $scope.moreList = function(event){
        angular.forEach($scope.informationLists,function(obj){
            if(event.id!==obj.id){
                obj._moreList = false
            }
        });
        event._moreList = !event._moreList;
    };
    
    function activatePage(page) {
        var listData = {
            page:page
        }
        informationSer.listCompeteregistered(listData).then(function(response){
            if(response.data.code==0){
                $scope.informationLists = response.data.data
            }else if(response.data.code==403||response.data.code==401){

                toastr.error( "请登录用户,2秒后跳至登陆页面", '温馨提示');
                var absurl = $location.absUrl();
                ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes' });
                setTimeout(function(){
                    window.location.href='http://localhost/login'
                },2000)
            }else{
                toastr.error( "请求超时，请联系管理员", '温馨提示');
            }
        });
    }
    $scope.abili = {
        itemsCount: 1, //总条数
        take: 10, //每页显示
        activatePage: activatePage
    };
    informationSer.countinformation().then(function(response){
        if(response.data.code == 0){;
            $scope.abili.itemsCount = response.data;
        }else if(response.data.code==403||response.data.code==401){

                toastr.error( "请登录用户,2秒后跳至登陆页面", '温馨提示');
                var absurl = $location.absUrl();
                ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes' });
                setTimeout(function(){
                    window.location.href='http://localhost/login'
                },2000)
            }else{
            toastr.error( "请求超时，请联系管理员", '温馨提示');
        }
    });
    // 删除
    $scope.$on('deletedId',function(event,delid){
        angular.forEach($scope.informationLists.data,function(obj){
            if(obj.id == delid){
                obj._delete = true
            }
        })
    });
});

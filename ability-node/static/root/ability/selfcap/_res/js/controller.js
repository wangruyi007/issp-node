var app = angular.module('selfcap', [{
    files:[
        "root/ability/selfcap/_res/js/service.js"
    ]
}]);
app.controller('selfcapCtrl',function ($scope,$state) {
    if ($state.current.url == '/selfcap') {
        $state.go('root.ability.selfcap.list');
    }
}).controller('selfcapMenuCtrl',function($scope,$state,$rootScope,$location){
    var urlName = $state.current.url.split('/')[1].split('[')[0];
    $scope.menuClass=urlName+"Menu";
    $rootScope.$on('$locationChangeSuccess', function () {//url地扯改变或者刷新
        if($location.path().split('/').slice(-1)=='list'){
            $scope.menuClass = 'listMenu';
        }
    });
    //监听到父Ctrl后改变事件
    $scope.$on("listId", function(event, id){
        $scope.idList = id;
    });
    //监听到父Ctrl后改变事件
    $scope.$on("socialListId", function(event, subId){
        $scope.idSocialList = subId;
    });
    //关于删除
    $scope.delete = function(){
        if($scope.idList){
            $state.go('root.ability.selfcap.list.delete[12]',{id:$scope.idList});
            $scope.menuClass = 'deleteMenu'
        }
    };
    //关于添加
    $scope.padd = function(){
        if($scope.idList){
            $state.go('root.ability.selfcap.padd[12]',{id:$scope.idList});
            $scope.menuClass = 'paddMenu'
        }
    };
    $scope.pedit = function(){
        if($scope.idList){
            $state.go('root.ability.selfcap.pedit[12]',{id:$scope.idList});
            $scope.menuClass = 'peditMenu'
        }
    };
    //编辑
    $scope.edit = function(){
        if($scope.idList){
            $state.go('root.ability.selfcap.edit[12]',{id:$scope.idList});
            $scope.menuClass = 'editMenu'
        }
    };
    $scope.list = function(){
        $scope.menuClass = 'listMenu'
    };
    $scope.add = function(){
        $scope.menuClass = 'addMenu'
    };
    $scope.perlist = function(){
        if($scope.idList){
            $state.go('root.ability.selfcap.perlist[12]',{id:$scope.idList});
            $scope.menuClass = 'perlistMenu'
       }
    };
    //个人社交添加
    $scope.social = function(){
        if($scope.idList){
            $state.go('root.ability.selfcap.social[12]',{id:$scope.idList});
            $scope.menuClass = 'socialMenu'
        }
    };
    //个人社交列表
    $scope.socialList = function(){
        if($scope.idList){
            $state.go('root.ability.selfcap.socialList',{id:$scope.idList});
            $scope.menuClass = 'socialListMenu'
        }
    };
    //个人社交删除
    $scope.socialDelete = function(){
        if($scope.idSocialList){
            $state.go('root.ability.selfcap.socialList.socialDelete[12]',{subId:$scope.idSocialList});
        }
    };
    //个人社交编辑
    $scope.socialEdit = function(){
        if($scope.idSocialList){
            $state.go('root.ability.selfcap.socialList.socialEdit[12]',{subId:$scope.idSocialList});
            $scope.menuClass = 'socialEditMenu'
        }
    };
});
//自定义过滤器
app.filter('cover', function(){
    return function(val){
        var result;
        switch(val){
            case "WOMAN":
                result = "女";
                break;
            case "MAN":
                result = "男";
                break;
            case "VIP":
                result = "VIP";
                break;
            case "OLD":
                result = "老客户";
                break;
            case "COOPERATOR":
                result = "合作伙伴";
                break;
            case "ORDINARY":
                result = "普通客户";
                break;
            case "COMPLETEPROJECT":
                result = "已完成项目客户";
                break;
            case "PROJECTING":
                result = "现项目客户";
                break;
            case "POTENTIAL":
                result = "潜在客户";
                break;
            case "THAW":
                result = "解冻";
                break;
            case "CONGEAL":
                result = "冻结";
                break;
            case "DELETE":
                result = "删除";
                break;
            case "NOACTIVE":
                result = "未激活";
                break;
            case "UNREVIEW":
                result = "未审核";
                break;
        }
        return result;
    }

})


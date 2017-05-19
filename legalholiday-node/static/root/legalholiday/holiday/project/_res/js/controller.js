var app = angular.module('project', [{
    files:[
        "root/legalholiday/holiday/project/_res/js/service.js"
    ]
}]);
app.controller('projectCtrl',function ($scope,$state) {
    if ($state.current.url == '/project') {//默认加载列表
        $state.go('root.legalholiday.holiday.project.list');
    }
}).controller('projectMenuCtrl',function($scope,$state,$rootScope,$location){
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
    $scope.$on("onSearch", function(event, name){
        $scope.onSearch = name;
    });
    //关于删除
    $scope.delete = function(){
        if($scope.idList){
            $state.go('root.legalholiday.holiday.project.list.delete[12]',{id:$scope.idList});
            $scope.menuClass = 'deleteMenu'
            $scope.idList = "";//清空选择的 id
        }
    };
    //编辑
    $scope.edit = function(){
        if($scope.idList){
            $state.go('root.legalholiday.holiday.project.edit[12]',{id:$scope.idList});
            $scope.menuClass = 'editMenu'
            $scope.idList = "";//清空选择的 id
        }
    };
    $scope.list = function(){
        $scope.menuClass = 'listMenu';
        $scope.isView = false;
        selectI(false);
    };
    //添加
    $scope.add = function(){
        $scope.menuClass = 'addMenu'
        $scope.isView = false;
        selectI(false);
    };
     //查看放假安排时间
    $scope.checkTime = function(){
        if($scope.idList){
            $state.go('root.legalholiday.holiday.project.checkTime[12]',{id:$scope.idList});
            $scope.menuClass = 'checkTimeMenu'
            $scope.idList = "";//清空选择的 id
            selectI(false,0)
        }
    };
    //查看  节假日工作安排
    $scope.checkPro = function(){
        if($scope.idList){
            $state.go('root.legalholiday.holiday.project.checkPro[12]',{id:$scope.idList});
            $scope.menuClass = 'checkProMenu'
            $scope.idList = "";//清空选择的 id
            selectI(false,1)
        }
    };
    $scope.checkPeo = function(){
        if($scope.idList){
            $state.go('root.legalholiday.holiday.project.checkPeo[12]',{id:$scope.idList});
            $scope.menuClass = 'checkPeoMenu'
            $scope.idList = "";//清空选择的 id
            selectI(false,2)
        }
    };
    $scope.checkGift = function(){
        if($scope.idList){
            $state.go('root.legalholiday.holiday.project.checkGift[12]',{id:$scope.idList});
            $scope.menuClass = 'checkGiftMenu'
            $scope.idList = "";//清空选择的 id
            selectI(false,3)
        }
    };
     $scope.checkNotice = function(){
        if($scope.idList){
            $state.go('root.legalholiday.holiday.project.checkNotice[12]',{id:$scope.idList});
            $scope.menuClass = 'checkNoticeMenu'
            $scope.idList = "";//清空选择的 id
            selectI(false,4)
        }
    };
    //控制查看列表数组
    $scope.isClick = [false,false,false,false,false];
    //设置查看数组
    function selectI(bool,index){
        for(let i = 0;i<5;i++){
                $scope.isClick[i] = bool;
            }
        if(index || '0'){
            $scope.isClick[index] = true;
        }
    }
    //点击查看
    $scope.View = function(){
         if($scope.idList){
            $scope.isView = true;
            selectI(true);
         }
    }
});

var app = angular.module('compete', []);
app.controller('competeCtrl', function ($scope,$state) {
    if ($state.current.url == '/compete') {//默认加载列表
         $state.go('root.compete.competitor');
    }
    //父 Ctrl 监听到事件，向下广播
    $scope.$on('changeId',function(event,msg){
        $scope.$broadcast('listId',msg)
    });
}).controller('navCtrl',function($scope,$state,$location){
    $scope.navCla='competitor';
    var active = $location.path().split('/')[3];
    $scope.navCla=active?active:'competitor';
    $scope.navClass= function(name){
        $scope.navCla=name
    }
    //下拉菜单
    $scope.showsList = [
        {id:"1",item:"竞争对手管理",menuList:[{name:'竞争对手信息'},{name2:'竞争对手管理汇总'}],showIs:false},
        {id:"2",item:"设置",menuList:[{name3:'设置'}],showIs:false},
    ];
      $scope.showMenu = function(obj,event) {
        if(event){
            if(obj.showIs){
                obj.showIs=!event;
            }else{
                obj.showIs=event;
               /* angular.forEach(function(item){ showSubAble sublist*/
                this.showsList.forEach(function(item){
                    if(item.id!=obj.id){
                        item.showIs=!event;
                    }else{
                        item.showIs=event;
                    }
                });
            }
        }
    };
});


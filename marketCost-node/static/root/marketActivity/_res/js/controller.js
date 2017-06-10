var app = angular.module('marketActivity', []);
app.controller('marketActivityCtrl', function ($scope,$state) {
    if ($state.current.url == '/marketActivity') {//默认加载列表
         $state.go('root.marketActivity.marketserve');
    }
    //父 Ctrl 监听到事件，向下广播
    $scope.$on('changeId',function(event,msg){
        $scope.$broadcast('listId',msg)
    });
}).controller('navCtrl',function($scope,$state,$location){
    $scope.navCla='marketserve';
    var active = $location.path().split('/')[3];
    $scope.navCla=active?active:'marketserve';
    $scope.navClass= function(name){
        $scope.navCla=name
    }
    $scope.showsList = [
        {id:"1",item:"市场招待",menuList:[{name:'市场招待申请'},{name2:'市场招待申请汇总'},{name3:'市场招待记录'},{name4:'市场招待记录汇总'}],showIs:false},
        {id:"2",item:"设置",menuList:[{name5:'设置'}],showIs:false},
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


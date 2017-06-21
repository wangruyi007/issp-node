var app = angular.module('business', []);
app.controller('businessCtrl', function ($scope,$state) {
    if ($state.current.url == '/business') {//默认加载列表
         $state.go('root.business.contract');
    }
    $scope.$on('changeId',function(event,msg){
        $scope.$broadcast('listId',msg)
    });
}).controller('navCtrl',function($scope,$state,$location){
    $scope.navCla='ssui';
    var active = $location.path().split('/')[4];
    $scope.navCla=active?active:'ssui';
    $scope.navClass= function(name){
        $scope.navCla=name;
        $scope.$emit('isId',true);//每次切换页面更新搜索值
    }

    //菜单
    $scope.showsList = [
        {id:"1",item:"项目承包管理",menuList:[{name:'项目承包洽谈'}],showIs:false},
        {id:"2",item:"项目外包管理",menuList:[{name2:'项目外包洽谈'}],showIs:false},
        {id:"3",item:"设置",menuList:[{name3:'设置'}],showIs:false},
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

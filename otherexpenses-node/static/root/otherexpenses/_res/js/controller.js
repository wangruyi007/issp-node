var app = angular.module('otherexpenses', []);
app.controller('otherexpensesCtrl', function ($scope,$state) {
    if ($state.current.url == '/otherexpenses') {//默认加载列表
         $state.go('root.otherexpenses.expenses');
    }
}).controller('navCtrl',function($scope,$state,$location){
    $scope.navCla='message';
    var active = $location.path().split('/')[4];
    $scope.navCla=active?active:'message';
    $scope.navClass= function(name){
        $scope.navCla=name
    }
     $scope.showsList = [
        {id:"1",item:"离职管理",menuList:[{name:'离职信息'}],showIs:false},
        {id:"2",item:"设置",menuList:[{name2:'设置'}],showIs:false},
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

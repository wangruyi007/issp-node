var app = angular.module('ability', []);
app.controller('abilityCtrl', function ($scope,$state) {
    if ($state.current.url == '/ability') {//默认加载列表
         $state.go('root.ability.companycap');
    }
    //父 Ctrl 监听到事件，向下广播
    $scope.$on('changeId',function(event,msg){
        $scope.$broadcast('listId',msg)
    });
    //父 Ctrl 监听到事件，向下广播
    $scope.$on('changeSocialListId',function(event,msg){
        $scope.$broadcast('socialListId',msg)
    });
}).controller('navCtrl',function($scope,$state,$location){
    $scope.navCla='companycap';
    var active = $location.path().split('/')[3];
    $scope.navCla=active?active:'companycap';
    $scope.navClass= function(name){
        $scope.navCla=name
    }
    $scope.showsList = [
        {id:"1",item:"商业能力展示",menuList:[{name:'公司能力展示'},{name2:"个人能力展示"},{name3:"合作对象商务展示"},{name4:"汇总和邮件发送"}],showIs:false},
        {id:"2",item:"设置",menuList:[{name5:'设置'}],showIs:false},
    ];
    $scope.showMenu = function(obj,event) {
        if(event){
            if(obj.showIs){
                obj.showIs=!event;
            }else{
                obj.showIs=event;
                /* angular.forEach(function(item){*/
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


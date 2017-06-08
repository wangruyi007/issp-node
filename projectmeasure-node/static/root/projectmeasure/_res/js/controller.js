var app = angular.module('projectmeasure', []);
app.controller('projectmeasureCtrl', function ($scope,$state) {
    if ($state.current.url == '/projectmeasure') {//默认加载列表
         $state.go('root.projectmeasure.manage');
    }
    $scope.$on('changeId',function(event,msg){
        $scope.$broadcast('listId',msg)
    });
}).controller('navCtrl',function($scope,$state,$location){
    $scope.navCla='basicinfo';
    var active = $location.path().split('/')[4];
    $scope.navCla=active?active:'basicinfo';
    $scope.navClass= function(name){
        $scope.navCla=name
    }
    $scope.showsList = [
        {id:"1",item:"项目测算",menuList:[{name:'项目基本信息'},{name2:'项目费用情况'},{name3:'项目人员需求'}],showIs:false},
        {id:"2",item:"工作界面",menuList:[{name4:'单个项目单个界面'},{name5:'单个项目多个界面'},{name6:'多个项目单个界面'},{name7:'多个项目多个界面'}],showIs:false},
        {id:"3",item:"项目测算管理汇总",menuList:[{name8:'项目测算与汇总'}],showIs:false},
        {id:"4",item:"设置",menuList:[{name9:'设置'}],showIs:false},
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

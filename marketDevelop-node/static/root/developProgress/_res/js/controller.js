var app = angular.module('progress', []);
app.controller('progressCtrl', function ($scope,$state,) {
    if ($state.current.url == '/developProgress') {//默认加载列表
        $state.go('root.developProgress.plan');
    }

}).controller('navCtrl',function($scope,$state,$location){
    $scope.navCla='yearPlan';
    var active = $location.path().split('/')[4];
    $scope.navCla=active?active:'yearPlan';
    $scope.navClass = function(name){
        $scope.navCla = name;
    };
    $scope.showsList = [
        {id:"1",item:"计划管理",menuList:[{name:'年计划'},{name2:"月计划"},{name3:"周计划"},{name4:"日计划"}],showIs:false},
        {id:"2",item:"市场管理",menuList:[{name5:'市场需求分析'},{name6:"目标信息"},{name7:"市场挖掘"},{name8:"市场调研"},{name9:"市场测算"}],showIs:false},
        {id:"3",item:"其他",menuList:[{name10:'业务类型管理'},{name11:"业务方向科目"}],showIs:false},
        {id:"4",item:"设置",menuList:[{name12:'设置'}],showIs:false}
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

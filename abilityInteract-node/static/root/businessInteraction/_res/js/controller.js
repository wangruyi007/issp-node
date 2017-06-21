var app = angular.module('interact', []);
app.controller('interactCtrl', function ($scope,$state) {
    if ($state.current.url == '/businessInteraction') {//默认加载列表
        $state.go('root.businessInteraction.interactContact');
    }
    $scope.$on('changeId',function(event,msg) {
        $scope.$broadcast('getId', msg)
    });
}).controller('navCtrl',function($scope,$state,$location){
    $scope.navCla='interactContact';
    var active = $location.path().split('/')[3];
    $scope.navCla=active?active:'interactContact';
    $scope.navClass = function(name){
        $scope.navCla = name;
        $scope.$emit('isId',true);//每次切换页面更新搜索值
    };
    $scope.showsList = [
        {id:"1",item:"商业能力互动",menuList:[{name:'互动联系信息'},{name2:"互动平台需求描述"},{name3:"洽谈详情"},{name4:"汇总和邮件发送"}],showIs:false},
        {id:"2",item:"设置",menuList:[{name5:'设置'}],showIs:false}
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


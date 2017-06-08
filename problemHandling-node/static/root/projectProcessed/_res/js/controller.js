var app = angular.module('processed', []);
app.controller('processedCtrl', function ($scope,$state) {
    if ($state.current.url == '/projectProcessed') {//默认加载列表
        $state.go('root.projectProcessed.problemAccepted');
    }
    $scope.$on('changeId',function(event,msg) {
        $scope.$broadcast('getId', msg)
    });
}).controller('navCtrl',function($scope,$state,$location){
    $scope.navCla='problemAccepted';
    var active = $location.path().split('/')[3];
    $scope.navCla=active?active:'problemAccepted';
    $scope.navClass = function(name){
        $scope.navCla = name;
        $scope.$emit('isId',true);//每次切换页面更新搜索值
    };
    $scope.showsList = [
        {id:"1",item:"项目中问题受理和处理",menuList:[{name:'项目执行中的问题受理'},{name2:"确认问题处理结果"},{name3:"参与处理人员的任务分配"}],showIs:false},
        {id:"2",item:"设置",menuList:[{name4:'设置'}],showIs:false}
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


var app = angular.module('employeeEntry', []);
app.controller('employeeEntryCtrl', function ($scope,$state) {
    if ($state.current.url == '/employeeEntry') {//默认加载列表
         $state.go('root.employeeEntry.userRegistration');
    }
    //父 Ctrl 监听到事件，向下广播
    $scope.$on('changeId',function(event,msg){
        $scope.$broadcast('listId',msg)
    });

}).controller('navCtrl',function($scope,$state,$location){
    $scope.navCla='userRegistration';
    var active = $location.path().split('/')[3];
    $scope.navCla=active?active:'userRegistration';
    $scope.navClass = function(name){
        $scope.navCla = name;
    };
    $scope.showsList = [
        {id:"1",item:"员工入职",menuList:[{name:'用户注册'},{name2:"入职登记"},{name3:"入职基本信息"},{name4:"薪资确认记录"}],showIs:false},
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
var app = angular.module('managementFee', []);
app.controller('managementFeeCtrl', function ($scope,$state) {
    if ($state.current.url == '/managementFee') {//默认加载列表
        $state.go('root.managementFee.managementSpend');
    }
    $scope.$on('changeId',function(event,msg) {
        $scope.$broadcast('getId', msg)
    });
}).controller('navCtrl',function($scope,$state,$location){
    $scope.navCla='managementSpend';
    var active = $location.path().split('/')[3];
    $scope.navCla=active?active:'managementSpend';
    $scope.navClass = function(name){
        $scope.navCla = name;
    };
    $scope.showsList = [
        {id:"1",item:"管理费用",menuList:[{name:'管理费'},{name2:"外包管理费"}],showIs:false},
        // {id:"2",item:"设置",menuList:[{name6:'设置'}],showIs:false}
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


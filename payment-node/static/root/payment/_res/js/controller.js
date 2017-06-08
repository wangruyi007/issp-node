var app = angular.module('payment', []);
app.controller('paymentCtrl', function ($scope,$state) {
    if ($state.current.url == '/payment') {//默认加载列表
        $state.go('root.payment.detail');
    }
    $scope.$on('changeId',function(event,msg) {
        $scope.$broadcast('getId', msg)
    });
    $scope.$on('socialListId',function(event,msg) {
        $scope.$broadcast('socialListId', msg)
    });
}).controller('navCtrl',function($scope,$state,$location){
    $scope.navCla='detail';
    var active = $location.path().split('/')[3];
    $scope.navCla=active?active:'detail';
    $scope.navClass = function(name){
        $scope.navCla = name;
    }
    $scope.showsList = [
        {id:"1",item:"回款管理",menuList:[{name:'回款明细'},{name2:"承包商"}],showIs:false},
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


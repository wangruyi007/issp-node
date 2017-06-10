var app = angular.module('recordAccount', []);
app.controller('recordAccountCtrl', function ($scope,$state) {
    if ($state.current.url == '/recordAccount') {//默认加载列表
        $state.go('root.recordAccount.voucherGeneration');
    }
    $scope.$on('changeId',function(event,msg) {
        $scope.$broadcast('getId', msg)
    });
    $scope.$on('seledIds',function(event,msg) {
        $scope.$broadcast('checkIds', msg)
    });
}).controller('navCtrl',function($scope,$state,$location){
    $scope.navCla='voucherGeneration';
    var active = $location.path().split('/')[3];
    $scope.navCla=active?active:'voucherGeneration';
    $scope.navClass = function(name){
        $scope.navCla = name;
    };
    $scope.showsList = [
        {id:"1",item:"记账凭证",menuList:[{name:'记账凭证生成设置'},{name2:"记账凭证审核"},{name3:"已审核凭证"},{name4:"已过帐"},{name5:"结帐记录"},{name6:"记账凭证记录"}],showIs:false},
        // {id:"2",item:"设置",menuList:[{name5:'设置'}],showIs:false}
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


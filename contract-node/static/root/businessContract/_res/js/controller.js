var app = angular.module('contract', []);
app.controller('contractCtrl', function ($scope,$state) {
    if ($state.current.url == '/businessContract') {//默认加载列表
        $state.go('root.businessContract.signingProject');
    }
    $scope.$on('changeId',function(event,msg) {
        $scope.$broadcast('getId', msg)
    });
}).controller('navCtrl',function($scope,$state,$location){
    $scope.navCla='signingProject';
    var active = $location.path().split('/')[3];
    $scope.navCla=active?active:'signingProject';
    $scope.navClass = function(name){
        $scope.navCla = name;
        $scope.$emit('isId',true);//每次切换页面更新搜索值
    };
    $scope.showsList = [
        {id:"1",item:"商务合同管理",menuList:[{name:'项目签订与立项'},{name2:"项目合同基本信息"},{name3:"派工单信息"},{name4:"合同类型"},{name5:"汇总和邮件发送"}],showIs:false},
        {id:"2",item:"设置",menuList:[{name6:'设置'}],showIs:false}
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


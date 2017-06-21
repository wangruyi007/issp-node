var app = angular.module('bidding', []);
app.controller('biddingCtrl', function ($scope,$state) {
    if ($state.current.url == '/biddingManagement') {//默认加载列表
        $state.go('root.biddingManagement.websiteInfo');
    }
    $scope.$on('changeId',function(event,msg) {
        $scope.$broadcast('getId', msg)
    });
}).controller('navCtrl',function($scope,$state,$location){
    $scope.navCla='websiteInfo';
    var active = $location.path().split('/')[3];
    $scope.navCla=active?active:'websiteInfo';
    $scope.navClass = function(name){
        $scope.navCla = name;
        $scope.$emit('isId',true);//每次切换页面更新搜索值
    };
    $scope.showsList = [
        {id:"1",item:"招投标管理",menuList:[{name:'招投标网站信息'},{name2:"招标信息"},{name3:"投标答疑问题记录"},{name4:"标书资料"},{name5:"开标信息"}],showIs:false},
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


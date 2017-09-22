var app = angular.module('affiliated', [{
    files:[
        "root/insurance/affiliated/_res/js/service.js",
    ]
}]);
app.controller('affilCtrl',function ($scope,$state) {
    if ($state.current.url == '/affiliated') {//默认加载列表
        $state.go('root.insurance.affiliated.list[12]')
    }
    $scope.$emit('isVi',false);//判断是否出现搜索按钮
}).controller('affilMenuCtrl',function($scope,$state,$rootScope,$location,affilSer){
    var urlName = $state.current.url.split('/')[1].split('[')[0];
    $scope.menuClass=urlName+"Menu";
    $rootScope.$on('$locationChangeSuccess', function () {//url地扯改变或者刷新
        if($location.path().split('/').slice(-1)=='list[12]' && window.location.href.indexOf('id=') == -1){
            $scope.menuClass = 'listMenu';
        }
    });
    //新增
    if (window.location.href.split('id=')[1]) {//如果是刷新进来的页面，没有经过list
        $scope.idListd = window.location.href.split('id=')[1];
        if($location.search().name){
            $scope.menuClass =$location.search().name + 'Menu';
        }
    }
    $scope.menuCheck = function (name) {
        var buttonName = name;
        $scope.buttonShow = true;
        affilSer.affilPermission(buttonName).then(function(response){
            if(response.data.code == 0 && response.data.data){
                $scope[buttonName] = true;
            }else{
                $scope[buttonName] = false;
            }
        });
        $scope.menuAdd = false;
    };
    //监听到父Ctrl后改变事件
    $scope.$on("getId", function(event, msg){
       $scope.idListd = msg;
    });

    $scope.$on('pageId',function(event,flag){
        $scope.page = flag;
    });
    if(!$scope.page){
        $scope.page =$location.search().page;
    }
    $scope.delete = function(){
        if($scope.idListd){
            $state.go('root.insurance.affiliated.list[12]',{id:$scope.idListd,name:'delete',page:$scope.page});
            $scope.menuClass = 'deleteMenu'
        }
    };
    $scope.audit = function(){
        if($scope.idListd){
            $state.go('root.insurance.affiliated.list[12]',{id:$scope.idListd,name:'audit',page:$scope.page});
            $scope.menuClass = 'auditMenu'
        }
    };

    $scope.edit = function(){
        if($scope.idListd){
            $state.go('root.insurance.affiliated.edit[12]',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'editMenu'
        }
    };
    $scope.completion = function(){
        if($scope.idListd){
            $state.go('root.insurance.affiliated.completion[12]',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'completionMenu'
        }
    };
    $scope.list = function(){
        $scope.menuClass = 'listMenu'
    };
    $scope.add = function(){
        $scope.menuClass = 'addMenu';
        $scope.idListd = ''
    };
    affilSer.affilPermission().then(function(response){
        if(response.data.code == 0){
            var data = response.data.data;
            if(data && data.length){
                $scope.isHide = false;
                for(var i =0,len=data.length;i<len;i++){
                    var obj = data[i];
                    $scope[obj.name]=obj.flag;
                }
            }else if(response.data.data.length == 0){
                $scope.isHide = true;
            }
        }else{
            $scope.isHide = false;
        }
    });
});

//自定义过滤
app.filter('cover', function(){
    return function (val) {
        var result;
        switch(val){
            case "SELF":
                result = "全额自付";
                break;
            case "COMPANY":
                result = "公司支付";
                break;
        }
        return result;
    }
});
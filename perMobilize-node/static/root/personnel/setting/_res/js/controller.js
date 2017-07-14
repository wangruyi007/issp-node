var app = angular.module('setting', [{
    files:[
        "root/personnel/setting/_res/js/service.js"
    ]
}]);
app.controller('settingCtrl',function ($scope,$state) {

    if ($state.current.url == '/setting') {//默认加载列表
        $state.go('root.personnel.setting.list[12]')
    }
    $scope.$emit('isVi',false);//判断是否出现搜索按钮
}).controller('settingMenuCtrl',function($scope,$state,$rootScope,$location){
    var urlName = $state.current.url.split('/')[1].split('[')[0];
    $scope.menuClass=urlName+"Menu";
    $rootScope.$on('$locationChangeSuccess', function () {//url地扯改变或者刷新
        if($location.path().split('/').slice(-1)=='list[12]'){

            $scope.menuClass = 'listMenu';
        }
    });

    $scope.$on('getId',function(event,id){
        $scope.editId=id;
    });

    $scope.list = function(){
        $state.go('root.personnel.setting.list[12]');
        $scope.menuClass = 'listMenu'
    };
    $scope.edit = function(){
        if($scope.editId){
            $state.go('root.personnel.setting.edit[12]',{id:$scope.editId});
            $scope.menuClass = 'editMenu'
        }

    }
});

app.filter('cover', function(){
    return function(val){
        var result;
        switch(val){
            case "LEVEL":
                result = "层级";
                break;
            case "MODULE":
                result = "模块";
                break;
            case "POSITION":
                result = "岗位";
                break;
            case "DEPART":
                result = "部门";
                break;
        }
        return result;
    }

})



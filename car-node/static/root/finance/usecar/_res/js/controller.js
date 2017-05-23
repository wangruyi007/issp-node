var app = angular.module('usecar', [{
    files:[
        "root/finance/usecar/_res/js/service.js"
    ]
}]);
app.controller('usecarCtrl',function ($scope,$state) {

    if ($state.current.url == '/usecar') {//默认加载列表
        // $state.go('root.finance.record.week[12]')
    };

}).controller('summaryMenuCtrl',function($scope,$state,$rootScope,$location){

    var urlName = $state.current.url.split('/')[1].split('[')[0];
    $scope.menuClass=urlName+"Menu";
    $rootScope.$on('$locationChangeSuccess', function () {//url地扯改变或者刷新
        if($location.path().split('/').slice(-1)=='list'){
            $scope.menuClass = 'listMenu';
        }
    });
});

//自定义过滤器
app.filter('cover', function(){
    return function(val){
        var result;
        switch(val){
            case "MAIN":
                result = "主营业务成本";
                break;
            case "MARKET":
                result = "市场费";
                break;
            case "TRAINING":
                result = "培训费";
                break;
            case true:
                result = "是";
                break;
            case false:
                result = "否";
                break;
            case "WAITAUDIT":
                result = "等待审核";
                break;
            case "FINANCEAUDIT":
                result = "财务核对";
                break;
            case "WAITPAY":
                result = "等待付款";
                break;
            case "PAYED":
                result = "已付款";
                break;
        }
        return result;
    }
})


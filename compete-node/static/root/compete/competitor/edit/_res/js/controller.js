var app = angular.module('companyEdit', ['toastr','ipCookie']);
app.controller('companyEditCtrl', function($scope, competitorSer,$state,toastr,$stateParams,$location,ipCookie){
    var companyId = {id : $stateParams.id};
    //获取值
    competitorSer.getOneById(companyId).then(function(response){
        if(response.data.code==0){
            $scope.data = response.data.data;
        }
    });
    //点击提交
    $scope.competitorEditFun =function(){
        var vm = $scope;
        var data = vm.data
        competitorSer.putcompetitorEdit(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.compete.competitor.list');
                toastr.success('温馨提示',"此次编辑成功");
            }else if(response.data.code==403  || response.data.code==401){
                toastr.error( "请登录用户,3秒后跳至登陆页面", '温馨提示');
                var absurl = $location.absUrl();
                ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes',domain:'issp.bjike.com' });
                setTimeout(function(){
                    window.location.href='http://localhost/login'
                },3000)
            }
        })
    }
    //可手填的下拉框
});
    //自定义过滤器
app.filter('coverEdit', function(){
    return function(val){
        var result;
        switch(val){
            case "COMMUNICATE":
                result = "通信类";
                break;
            case "SOFTWARE":
                result = "软件类";
                break;
            case "MARKETINGPLAN":
                result = "营销策划类";
                break;
            case "INTELLIGENTIZE":
                result = "智能化类";
                break;
            case "ELECTRONICCOMMERCE":
                result = "电子商务类";
                break;
            case "REALTY":
                result = "房地产类";
                break;
            case "FINANCIAL":
                result = "理财类";
                break;
            case "FOOD":
                result = "食品类";
                break;
        }
        return result;
    }


});
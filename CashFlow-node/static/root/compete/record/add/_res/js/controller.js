var app = angular.module('recordAdd', ['toastr','ipCookie']);
app.controller('recordAddCtrl', function($scope, recordSer,$state,toastr,ipCookie,$location){
    // 地区
    recordSer.areas().then(function(response){
        if(response.data.code == 0){
            $scope.areas = response.data.data;
            console.log($scope.areas)
        }
    });
    // 项目名称
    recordSer.projects().then(function(response){
        if(response.data.code == 0){
            $scope.projects = response.data.data;
            console.log($scope.projects)
        }
    });
    // 项目组
    recordSer.projectGroups().then(function(response){
        if(response.data.code == 0){
            $scope.projectGroups = response.data.data;
            console.log($scope.projectGroups)
        }
    });
    //添加个人能力
    $scope.recordAddFun = function(){
        var d =  angular.element('.time').val();
        var data = $scope.data;
        data.recordDate=d;
        //只取两位小数
        $scope.data.income = Number($scope.income).toFixed(2);
        $scope.data.expenditure = Number($scope.expenditure).toFixed(2);
        //后台没写选项中的例子
        recordSer.moneyAdd(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.compete.record.list');
                toastr.success( "公司已成功添加", '温馨提示');
            }else if(response.data.code==403||response.data.code==401){

                toastr.error( "请登录用户,2秒后跳至登陆页面", '温馨提示');
                var absurl = $location.absUrl();
                ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes' });
                setTimeout(function(){
                    window.location.href='http://localhost/login'
                },2000)
            }else{
                toastr.error(response.data.msg,'温馨提示');
            }
        });

    };
});






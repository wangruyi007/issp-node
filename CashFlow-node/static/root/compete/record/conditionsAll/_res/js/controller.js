var app = angular.module('recordConditionsAll', ['toastr']);
app.controller('recordConditionsAllCtrl', function($scope, recordSer,toastr){


    //查询事件
    $scope.collect = function(){
        var data = $scope;
        data.sum={
            year:data.year,
            month:data.month,
            // area:data.area,
            // projectGroup:data.projectGroup,
            // project:data.project
        };
        recordSer.moneyConditionsAll(data.sum).then(function(response){
            
            if(response.data.code == 0){
                $scope.recordLists = response.data.data;
            }else if(response.data.code==403||response.data.code==401){
                toastr.error( "请登录用户,2秒后跳至登陆页面", '温馨提示');
                var absurl = $location.absUrl();
                ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes' });
                setTimeout(function(){
                    window.location.href='http://localhost/login'
                },2000)
            }
        })
    };

});





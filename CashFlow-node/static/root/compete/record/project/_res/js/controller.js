var app = angular.module('recordProject', ['toastr']);
app.controller('recordProjectCtrl', function($scope, recordSer,toastr){

    $scope.showed=true;
    // 获取项目名称
    recordSer.moneyProject().then(function(response){
        if(response.data.code == 0){
            $scope.names = response.data.data;
        }else if(response.data.code==403||response.data.code==401){
            toastr.error( "请登录用户,2秒后跳至登陆页面", '温馨提示');
            var absurl = $location.absUrl();
            ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes' });
            setTimeout(function(){
                window.location.href='http://localhost/login'
            },2000)
        }
    });
    $scope.collect = function(){
        var data = $scope;
        data.sum={
            year:data.year,
            month:data.month,
            // area:data.area,
            // projectGroup:data.projectGroup,
            project:data.project
        };
        recordSer.moneyProject(data.sum).then(function(response){
            if(response.data.code == 0){
                if( data.sum.year == undefined || data.sum.year == '' || data.sum.month == undefined || data.sum.month == ''){
                    $scope.showed=true
                }else {
                    $scope.showed=false
                }
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





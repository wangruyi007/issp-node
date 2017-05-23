var app = angular.module('courseCollectcontrast', ['toastr']);
app.controller('courseCollectContrastCtrl', function($scope, courseCollectSer,toastr){


    //查询事件
    $scope.collect = function(){
       var sum={
            a:$scope.monthsa,
            b:$scope.monthsb,
        };
        courseCollectSer.subjectsContrast(sum).then(function(response){
            
            if(response.data.code == 0){
                $scope.courseCollectLists = response.data.data;
                console.log($scope.courseCollectLists)
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





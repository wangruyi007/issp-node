var app = angular.module('messageList', ['ng-pagination','toastr','ipCookie']);
app.controller('messageListCtrl',function($scope,$stateParams,contactSer,toastr,$location,ipCookie){
    $scope.$emit('changeId', null);
    function activatePage(page) {
        var listData = {
            page:page,
            id : $stateParams.id
        }
        contactSer.MessageList(listData).then(function(response){
            if(response.data.code==0){

                $scope.messageInfo = response.data.data
            }else if(response.data.code==403||response.data.code==401){
                toastr.error( "请登录用户,2秒后跳至登陆页面", '温馨提示');
                var absurl = $location.absUrl();
                ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes',domain:'issp.bjike.com' });
                setTimeout(function(){
                    window.location.href='http://localhost/login'
                },2000)
            }else if(response.data.code==1){
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    }

//分页
    $scope.custom = {
        itemsCount: 2, //总条数
        take: 10, //每页显示
        activatePage: activatePage
    };

    contactSer.countMessage().then(function(response){
        if(response.data.code==0){
            $scope.custom.itemsCount = response.data.data;
        }else if(response.data.code==403||response.data.code==401){
            toastr.error( "请登录用户,2秒后跳至登陆页面", '温馨提示');
            var absurl = $location.absUrl();
            ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes',domain:'issp.bjike.com' });
            setTimeout(function(){
                window.location.href='http://localhost/login'
            },2000)
        }else if(response.data.code==1){
            toastr.error( response.data.msg, '温馨提示');
        }
    })

});


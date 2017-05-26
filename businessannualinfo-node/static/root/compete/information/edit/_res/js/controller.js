var app = angular.module('informationEdit', ['toastr','ipCookie']);
app.controller('informationEditCtrl', function($scope, informationSer,$state,toastr,$stateParams,ipCookie,$location){
    var informationId = {id : $stateParams.id};
    //获取值
    informationSer.annualOne(informationId).then(function(response){
        if(response.data.code==0){
            $scope.data = response.data.data;
        }
    });
    //提交
    $scope.informationEditFun = function(){
        var vm = $scope;
        var data = vm.data;

        var d =  angular.element('.time').val();
        var y =  angular.element('.state').val();
        data.submitDate=d;
        data.status=y;
        
        informationSer.annualEdit(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.compete.information.list');
                toastr.success( "已成功编辑", '温馨提示');
            }else if(response.data.code==403||response.data.code==401){

                toastr.error( "请登录用户,2秒后跳至登陆页面", '温馨提示');
                var absurl = $location.absUrl();
                ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes' });
                setTimeout(function(){
                    window.location.href='http://localhost/login'
                },2000)
            }
        });
    };
});
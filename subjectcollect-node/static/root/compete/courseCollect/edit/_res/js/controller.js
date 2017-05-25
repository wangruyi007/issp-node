var app = angular.module('courseCollectEdit', ['toastr','ipCookie']);
app.controller('courseCollectEditCtrl', function($scope, courseCollectSer,$state,toastr,$stateParams,ipCookie,$location,$filter){
    var courseCollectId = {id : $stateParams.id};
    //获取值
    courseCollectSer.subjectsId(courseCollectId).then(function(response){
        if(response.data.code==0){
            $scope.data = response.data.data;
        }
    });
    //提交
    $scope.courseCollectEditFun = function(){
        var vm = $scope;
        var data = vm.data;

        var d =  angular.element('.time').val();
        data.submitDate=d;
        //只取两位小数
        $scope.data.income = Number($scope.data.income).toFixed(2);
        $scope.data.expenditure = Number($scope.data.expenditure).toFixed(2);
        courseCollectSer.subjectsEdit(data).then(function(response){
            console.log(response)
            if(response.data.code == 0){
                $state.go('root.compete.courseCollect.list');
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
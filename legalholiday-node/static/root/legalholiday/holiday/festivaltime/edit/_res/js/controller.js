/**
 * Created by ike on 2017/4/18.
 */
var app = angular.module('festivaltimeEdit', ['toastr']);
app.controller('festivaltimeEditCtrl', function($scope, festivaltimeSer,$state,toastr,$stateParams){
    var companyId = {id : $stateParams.id};
    //获取值
    festivaltimeSer.getOneById1(companyId).then(function(response){
        if(response.data.code==0){
            $scope.data = response.data.data;
        }
    });
    //点击提交
    $scope.EditFun =function(){
        $scope.data.companyStartTime = angular.element('.startTime').val();
        $scope.data.companyEndTime = angular.element('.endTime').val();
        $scope.data.takeTime = angular.element('.takeTime').val();
        $scope.data.offTime = angular.element('.offTime').val();
        var data = $scope.data;
        data.id = companyId.id;
        festivaltimeSer.gitfEdit(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.legalholiday.holiday.festivaltime.list');
                toastr.success('温馨提示',"此次编辑成功");
            }else if(response.data.code == 403){
                toastr.error( "请登录用户,3秒后跳至登陆页面", '温馨提示');
                var absurl = $location.absUrl();
                ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes' });
                setTimeout(function(){
                    window.location.href='http://localhost/login'
                },3000)
            }else if(response.data.code == 1) {
                toastr.error('已存在一条该节日名称，节日名称不能相同,编辑失败','温馨提示');
            }
        })
    }
    
});
   

var app = angular.module('mainfeeEdit', ['toastr','ipCookie']);
app.controller('mainfeeEditCtrl', function($scope, mainfeeSer,$state,toastr,$stateParams,ipCookie,$location){
    var companyId = {id : $stateParams.id};
    //获取id对应的数据
    mainfeeSer.getOneById1(companyId).then(function(response){
        if(response.data.code==0){
            $scope.data = response.data.data;
        }
    });

    //年份
    $scope.years = [];
    for(let i = 1978;i < 2078; i++){
        $scope.years.push(i);
    }
    //月份
    $scope.monthes = ['01','02','03','04','05','06','07','08','09',10,11,12];

    //点击提交
    $scope.EditFun =function(){
        var data = $scope.data;
        mainfeeSer.editData(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.socialfee.socialfee.mainfee.list');
                toastr.success('温馨提示',"此次编辑成功");
            }if(response.data.code == 403){
                toastr.error( "请登录用户,3秒后跳至登陆页面", '温馨提示');
                var absurl = $location.absUrl();
                ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes' });
                setTimeout(function(){
                    window.location.href='http://localhost/login'
                },3000)
            }
        })
    }
});
   
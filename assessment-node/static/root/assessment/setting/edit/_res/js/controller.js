var app = angular.module('settingEdit', ['toastr','ipCookie','angularjs-dropdown-multiselect']);
app.controller('settingEditCtrl', function($scope, settingSer, $state,$stateParams,toastr,ipCookie,$location){

    $scope.getId = {id:$stateParams.id};
    settingSer.getpermit($scope.getId).then(function(response){
        if(response.data.code==0){
            $scope.edit = response.data.data;
            $scope.positions=$scope.edit.cusOperateVO
        }
    });

    $scope.positions = [];
    $scope.stringSettings = {displayProp: 'value',idProperty: 'id'};
    settingSer.getListpermit($scope.getId).then(function(response){
        if(response.data.code==0){
            $scope.workOptions= response.data.data;
        }else if(response.data.code==1){
            toastr.error( response.data.msg, '温馨提示');
        }
    });



    $scope.editSetting = function(){
        var permitArr=[];
        angular.forEach($scope.positions,function(item){
            permitArr.push(item.id)
        });
        $scope.edit.operators=permitArr.join(',');
        $scope.edit.operator = null;
        settingSer.editSetting($scope.edit).then(function(response){
            if(response.data.code == 0){
                $state.go('root.project.setting.list[12]');
                toastr.success("已成功编辑", '温馨提示');
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

});






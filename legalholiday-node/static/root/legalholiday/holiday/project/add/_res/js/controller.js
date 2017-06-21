/**
 * Created by ike on 2017/4/17.
 */
var app = angular.module('projectAdd', ['toastr','ipCookie']);
app.controller('projectAddCtrl', function($scope, projectSer,$state,toastr,ipCookie){
    $scope.arranges = [{}];//
    $scope.urgencys = [{}];//
    $scope.gifts = [{}];//
    $scope.notices = [{}];//

    //获取所有的节假日名字
    projectSer.allFestivalList().then(function(response){
        if(response.data.code == 0){
            $scope.allFestival = response.data.data;
        }
    })
    //添加
    $scope.AddFun = function(){
        $scope.data.holidayWorkPlanTOList = angular.copy($scope.arranges);
        $scope.data.areaRelationerTOList = angular.copy($scope.urgencys);
        $scope.data.welfareTOList =angular.copy($scope.gifts);
        $scope.data.noticeThingTOList = angular.copy($scope.notices);
        var data = $scope.data;
        var addData = converFormData(data)
        projectSer.addMarketserveapply1(addData).then(function(response){
            if(response.data.code == 0){
                $state.go('root.legalholiday.holiday.project.list');
                toastr.success( "已成功添加", '温馨提示');
            }else if(response.data.code==403){
                 toastr.error( "请登录用户,3秒后跳至登陆页面", '温馨提示');
                var absurl = $location.absUrl();
                ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes',domain:'issp.bjike.com' });
                setTimeout(function(){
                    window.location.href='http://localhost/login'
                },3000)
            }
        });
    };

    //表头选择
    $scope.tab={
        current: "_basic"
    }
    $scope.boardBtn=function(name){
        $scope.tab.current = name;
    }
    //添加多项
    $scope.more = function(){
        var obj = {};
        switch ($scope.tab.current){
            case '_arrange':
                $scope.arranges.push(obj);
                break;
            case '_urgency':
                $scope.urgencys.push(obj);
                break;
            case '_gift':
                $scope.gifts.push(obj);
                break;
            case '_notice':
                $scope.notices.push(obj);
                break;
        }
    }
    $scope.del = function(val){
        switch ($scope.tab.current){
            case '_arrange':
                $scope.arranges.splice(val,1)
                break;
            case '_urgency':
                $scope.urgencys.splice(val,1)
                break;
            case '_gift':
                $scope.gifts.splice(val,1)
                break;
            case '_notice':
                $scope.notices.splice(val,1)
                break;
        }
    }

});





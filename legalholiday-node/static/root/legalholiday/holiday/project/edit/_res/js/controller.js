/**
 * Created by ike on 2017/4/18.
 */
var app = angular.module('projectEdit', ['toastr','ipCookie']);
app.controller('projectEditCtrl', function($scope, projectSer,$state,toastr,$stateParams,ipCookie){
    var companyId = {id : $stateParams.id};
    console.log(companyId.id)
    //获取值
    projectSer.getOneById1(companyId).then(function(response){
        if(response.data.code==0){
            $scope.data = response.data.data;
            $scope.arranges = response.data.data.holidayWorkPlanVOList || [{}];
            $scope.urgencys = response.data.data.areaRelationerVOList || [{}];
            $scope.gifts = response.data.data.welfareVOList || [{}];
            $scope.notices = response.data.data.noticeThingVOList || [{}];
        }
    });
    //获取所有的节假日名字
    projectSer.allFestivalList().then(function(response){
        if(response.data.code == 0){
            $scope.allFestival = response.data.data;
        }
    })

    //点击提交
    $scope.EditFun =function(){
        $scope.data.holidayWorkPlanTOList = angular.copy($scope.arranges);
        $scope.data.areaRelationerTOList = angular.copy($scope.urgencys);
        $scope.data.welfareTOList =angular.copy($scope.gifts);
        $scope.data.noticeThingTOList = angular.copy($scope.notices);
        var data = $scope.data;
        var addData = converFormData(data)
        var data = $scope.data;
        data.id = companyId.id;;
        projectSer.gitfEdit(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.legalholiday.holiday.project.list');
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
     //表头选择
    $scope.tab={
        current: "_basic"
    }
    $scope.boardBtn=function(name){
        $scope.tab.current = name;
    }
});
   
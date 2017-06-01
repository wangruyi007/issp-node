var app = angular.module('salaryconfirmAdd', ['toastr','ipCookie']);
app.controller('salaryconfirmAddCtrl', function($scope,salaryconfirmSer,salaryconfirmSer,$state,toastr,ipCookie,$location){
    //地区
    salaryconfirmSer.salaryconfirmAreas().then(function(response){
        if(response.data.code == 0){
            $scope.areas = response.data.data;
        }
    });
    //部门
    salaryconfirmSer.salaryconfirmDepartments().then(function(response){
        if(response.data.code == 0){
            $scope.departments = response.data.data;
        }
    });
    //职位
    salaryconfirmSer.salaryconfirPositions().then(function(response){
        if(response.data.code == 0){
            $scope.positions = response.data.data;        }
    });

    //姓名
    salaryconfirmSer.salaryconfirmUsers().then(function(response){
        if(response.data.code == 0){
            $scope.users = response.data.data;
        }
    });

    $scope.changSelect = function(){
        var data={username:$scope.users};
        salaryconfirmSer.salaryconfirmUsers(data).then(function(response){
            if(response.data.code == 0){
                $scope.numbers = response.data.data;
            }
        });
    };
    //添加个人能力
    $scope.salaryconfirmAddFun = function(){
        var t1 =  angular.element('.timeOne').val();
        var t2 =  angular.element('.timeTwo').val();
        var r =  angular.element('.yon').val();
        var data = $scope.data;
        data.salaryStart=t1;
        data.salaryEnd=t2;
        data.ratepaying=r;
        //只取两位小数
        // $scope.data.attendanceDays = Number($scope.attendanceDays).toFixed(2);
        // $scope.data.salary = Number($scope.salary).toFixed(2);
        // $scope.data.cpSubsidy = Number($scope.cpSubsidy).toFixed(2);
        // $scope.data.dormitorySubsidy = Number($scope.dormitorySubsidy).toFixed(2);
        // $scope.data.yearSubsidy = Number($scope.yearSubsidy).toFixed(2);
        // $scope.data.hotSubsidy = Number($scope.hotSubsidy).toFixed(2);
        // $scope.data.anotherSubsidy = Number($scope.anotherSubsidy).toFixed(2);
        // $scope.data.socialSubsidy = Number($scope.socialSubsidy).toFixed(2);
        // $scope.data.overWorkDays = Number($scope.overWorkDays).toFixed(2);
        // $scope.data.holidayWorkDays = Number($scope.holidayWorkDays).toFixed(2);
        // $scope.data.socialConsume = Number($scope.socialConsume).toFixed(2);
        // $scope.data.dormitoryConsume = Number($scope.dormitoryConsume).toFixed(2);
        // $scope.data.deduction = Number($scope.deduction).toFixed(2);
        // $scope.data.absenteeismDays = Number($scope.absenteeismDays).toFixed(2);
        // $scope.data.vacationDays = Number($scope.vacationDays).toFixed(2);

        salaryconfirmSer.salaryconfirmAdd(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.compete.salaryconfirm.list');
                toastr.success( "公司已成功添加", '温馨提示');
            }else if(response.data.code==403||response.data.code==401){

                toastr.error( "请登录用户,2秒后跳至登陆页面", '温馨提示');
                var absurl = $location.absUrl();
                ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes' });
                setTimeout(function(){
                    window.location.href='http://localhost/login'
                },2000)
            }else{
                toastr.error(response.data.msg,'温馨提示');
            }
        });

    };
});






var app = angular.module('entryRegisterAdd', ['toastr','ipCookie']);
app.controller('entryRegisterAddCtrl', function($scope, registerSer,$state,toastr,$location,ipCookie){
    $scope.fn = function(){
        
    }
    //家庭成员
    $scope.homes = [{},{},{},{}];
    //学习经历

    $scope.studies = [{a:'a',b:'ba'},{a:'b',b:'bb'},{a:'c',b:'bc'},{a:'d',b:'bd'}];//给学习时间添加类数组

    //工作经历

    $scope.works = [{a:'a1',b:'be'},{a:'b1',b:'bf'},{a:'c1',b:'bg'},{a:'d1',b:'bh'}];//给工作时间添加类数组

    //证书情况

    $scope.certificates = [{a:'e1'},{a:'e2'},{a:'e3'},{a:'e4'}];//给证书情况添加类数组
    
    $scope.AddFun = function(){
        $scope.data.birthday = angular.element('.birthday').val();//获取生日
        $scope.data.graduationDate = angular.element('.graduationDate').val();//获取毕业时间
        //遍历学习时间

        $scope.data.studyStartTimes = [];
        $scope.data.studyEndTimes = [];
        for(let i = 0;i < $scope.studies.length;i++){
            if(angular.element("."+$scope.studies[i].a).val()){
                $scope.data.studyStartTimes[i] = angular.element("."+$scope.studies[i].a).val();
                $scope.data.studyEndTimes[i] = angular.element("."+$scope.studies[i].b).val();
            }
        }
        //遍历工作经历时间
        $scope.data.workStartTimes = [];
        $scope.data.workEndTimes = [];
        for(let i = 0;i < $scope.works.length;i++){
            if(angular.element("."+$scope.works[i].a).val()){
                $scope.data.workStartTimes[i] = angular.element("."+$scope.works[i].a).val();
                $scope.data.workEndTimes[i] = angular.element("."+$scope.works[i].b).val();
            }
        }
        //遍历获奖时间
        $scope.data.obtainTimes = [];
        for(let i = 0;i < $scope.certificates.length;i++){
            if(angular.element("."+$scope.certificates[i].a).val()){
                $scope.data.obtainTimes[i] = angular.element("."+$scope.certificates[i].a).val();
            }
        }
        var data = $scope.data;
        registerSer.addData(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.employeeEntry.entryRegister.list');
                toastr.success( "已成功添加", '温馨提示');
            }else if(response.data.code==403 || response.data.code==401){
                toastr.error( "请登录用户,3秒后跳至登陆页面", '温馨提示');
                var absurl = $location.absUrl();
                ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes',domain:'issp.bjike.com' });
                setTimeout(function(){
                    window.location.href='http://localhost/login'
                },3000)
            }
        });
    };
});
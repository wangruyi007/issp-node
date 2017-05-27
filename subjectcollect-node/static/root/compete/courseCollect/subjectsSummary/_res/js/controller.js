var app = angular.module('subjectsSummary', ['toastr','ipCookie']);
app.controller('subjectsSummaryCtrl', function($scope, courseCollectSer,toastr,$location,ipCookie){

    $scope.showed=true
    courseCollectSer.subjectsOne().then(function(response){
        if(response.data.code == 0){
            $scope.firstLevel = response.data.data;
        }
    });
    $scope.changSelect = function(){
        var data={firstSel:$scope.firstSubject};
        courseCollectSer.subjectsTwo(data).then(function(response){
            if(response.data.code == 0){
                $scope.secondLevel = response.data.data;
            }
        });
    };
    $scope.changThird = function(){
        var data={
            firstSel:$scope.firstSubject,
            secondSel:$scope.secondSubject
        };
        courseCollectSer.subjectsThree(data).then(function(response){
            if(response.data.code == 0){
                $scope.thirdLevel = response.data.data;
            }
        });
    };
    $scope.collect = function(){
        var vm = $scope;
        vm.sum={
            startTime:angular.element('.start').val(),
            endTime:angular.element('.end').val(),
            firstSubject:vm.firstSubject,
            secondSubject:vm.secondSubject,
            thirdSubject:vm.thirdSubject
        };
        courseCollectSer.subjectSummary(vm.sum).then(function(response){

            if(response.data.code == 0){
                if( vm.sum.firstSubject == undefined || vm.sum.firstSubject == ''){
                    $scope.showed=true;

                }else {
                    $scope.showed = false;
                }
                $scope.summaryLists = response.data.data;
            }else if(response.data.code==403||response.data.code==401){
                toastr.error( "请登录用户,2秒后跳至登陆页面", '温馨提示');
                var absurl = $location.absUrl();
                ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes' });
                setTimeout(function(){
                    window.location.href='http://localhost/login'
                },2000)
            }
        })
    };

});





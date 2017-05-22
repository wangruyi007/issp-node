/**
 * Created by ike on 2017/4/17.
 */
var app = angular.module('firstsubjectAdd', ['toastr','ipCookie']);
app.controller('accountAddCtrl', function($scope, accountSer,$state,toastr,ipCookie,$location){
    //获取一级列表
    accountSer.allFirstsubject().then(function(response){
        if(response.data.code == 0){
                $scope.firstList = response.data.data;
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
        }
    })
    //获取二级列表
    function secondSub(data){
        $scope.secondList = [];
        var secondData = {
            firstSubject:data
        }
        accountSer.SecondList(secondData).then(function(response){
            if(response.data.code == 0){
                    $scope.secondList = response.data.data;
                }else if(response.data.code==403){
                    toastr.error( "获取列表失败", '温馨提示');
                }
            })
    }
    $scope.firstFn = function(data){
        secondSub(data);
    }
    //获取三级列表
    function thirdSub(data){
        $scope.thirdList = [];
        var ThirdData = {
            firstSubject:data.firstSubject,
            secondSubject:data.secondSubject
        }
        accountSer.ThirdList(ThirdData).then(function(response){
            if(response.data.code == 0){
                    $scope.thirdList = response.data.data;
                }else if(response.data.code==403 || response.data.code == 401){
                    toastr.error( "请登录用户,3秒后跳至登陆页面", '温馨提示');
                    var absurl = $location.absUrl();
                    ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes',domain:'issp.bjike.com' });
                    setTimeout(function(){
                        window.location.href='http://localhost/login'
                    },3000)
                }
            })
    }
    $scope.scondFn = function(val){
        var scondData = {
            firstSubject:$scope.data.firstSubject,
            secondSubject:$scope.data.secondSubject
        };
        thirdSub(scondData);
    }
    //添加
    $scope.companyAddFun = function(){
        $scope.data.startTime = angular.element('.startTiming').val();//计划时间
        var data = $scope.data;
        accountSer.addMarketserveapply1(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.initialize.sort.account.list');
                toastr.success( "已成功添加", '温馨提示');
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }
        });
    };
});





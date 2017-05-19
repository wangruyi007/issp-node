/**
 * Created by ike on 2017/4/18.
 */
var app = angular.module('firstsubjectEdit', ['toastr','ipCookie']);
app.controller('accountEditCtrl', function($scope, accountSer,$state,toastr,$stateParams,ipCookie,$location){
    var companyId = {id : $stateParams.id};
    //获取值
    accountSer.getOneById1(companyId).then(function(response){
        if(response.data.code==0){
            $scope.data = response.data.data;
        }
    });
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
                }else if(response.data.code==403 || response.data.code == 401){
                    toastr.error( "请登录用户,3秒后跳至登陆页面", '温馨提示');
                    var absurl = $location.absUrl();
                    ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes' });
                    setTimeout(function(){
                        window.location.href='http://localhost/login'
                    },3000)
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
                }else if(response.data.code==403){
                    toastr.error( "请登录用户", '温馨提示');
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


    //点击提交
    $scope.EditFun =function(){
        var data = $scope.data;
        data.id = companyId.id;
        accountSer.marketserveapplyEdit1(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.initialize.sort.account.list');
                toastr.success('温馨提示',"此次编辑成功");
            }if(response.data.code == 403){
                toastr.error('温馨提示','提交错误')
            }
        })
    }
    
});
   
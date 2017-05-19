var app = angular.module('basicinfoAdd', ['toastr','ipCookie']);
app.controller('basicinfoAddCtrl', function($scope, basicinfoSer,$state,toastr,ipCookie,$location){

    basicinfoSer.cusNumber().then(function(response){
        if(response.data.code == 0){
            $scope.cusNumber = response.data.data
        }
    });
    basicinfoSer.customerLevelName().then(function(response){
        if(response.data.code == 0){
            $scope.levels = response.data.data
        }
    });

    //客户添加
    $scope.basicinfoAddFun = function(){
        var vm = $scope;
        var data = {
            customerNum : vm.cusNumber.customerNum,
            customerName : vm.addCustomerName,
            area : vm.addArea,
            customerType : vm.addCustomerType,
            customerSex : vm.addCustomerSex,
            customerStatus : vm.addCustomerStatus,
            relation:vm.addRelation,
            origin : vm.addOrigin,
            customerLevelName : vm.addCusLevel,
            cusEmail : vm.addCusEmail,
            introducer : vm.addIntroducer,
            phone : vm.addPhone,
            tel : vm.addTel,
            qq : vm.addqq,
            weChart : vm.addWeChart,
            origanizion : vm.addOriganizion,
            workProfession : vm.addWorkProfession,
            workLevel : vm.addWorkLevel,
            origanizationSize : vm.addOriganizationSize,
            lifeArea : vm.addLifeArea,
            workPosition : vm.addWorkPosition,
            oldWorkPlace : vm.addOldWorkPlace,
            workRight : vm.addWorkRight,
            grouthArea:vm.addGrouthArea,
            marketReceptTime:angular.element('.addMarketReceptTime').val()
        };
        basicinfoSer.addCustomerbaseinfo(data).then(function(response){

            if(response.data.code == 0){
                $state.go('root.customer.basicinfo.list');
                toastr.success( "客户信息已成功添加", '温馨提示');
            }else if(response.data.code==403||response.data.code==401){
                toastr.error( "请登录用户,2秒后跳至登陆页面", '温馨提示');
                var absurl = $location.absUrl();
                ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes' });
                setTimeout(function(){
                    window.location.href='http://localhost/login'
                },2000)
            }
        });

    };
});






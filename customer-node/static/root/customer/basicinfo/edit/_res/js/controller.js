var app = angular.module('basicinfoEdit', ['toastr','ipCookie']);
app.controller('basicinfoEditCtrl', function($scope, basicinfoSer,$stateParams,$state,toastr,ipCookie,$location){
    var cusNumData ={customerNum: $stateParams.cusNum};

    //重要性级别
    basicinfoSer.customerLevelName().then(function(response){
        $scope.customerLevels = response.data;
    });
    basicinfoSer.getCustomers(cusNumData).then(function(response){
        if(response.data.code==0){
            $scope.editInfo = response.data.data
        }else if(response.data.code==1){
            toastr.error( response.data.msg, '温馨提示');
        }
    });

    //
    // //客户编辑
    $scope.basicinfoEditFun = function(){
        var vm = $scope;
        var data = {
            id:vm.editInfo.id,
            customerNum : vm.editInfo.customerNum,
            customerName : vm.editInfo.customerName,
            area : vm.editInfo.area,
            customerType : vm.editInfo.customerType,
            customerSex : vm.editInfo.customerSex,
            customerStatus : vm.editInfo.customerStatus,
            relation:vm.editInfo.relation,
            origin : vm.editInfo.origin,
            customerLevelName : vm.editInfo.customerLevelVO.name,
            cusEmail : vm.editInfo.cusEmail,
            introducer : vm.editInfo.introducer,
            phone : vm.editInfo.phone,
            tel : vm.editInfo.tel,
            qq : vm.editInfo.qq,
            weChart : vm.editInfo.weChart,
            origanizion : vm.editInfo.origanizion,
            workProfession : vm.editInfo.workProfession,
            workLevel : vm.editInfo.workLevel,
            origanizationSize : vm.editInfo.origanizationSize,
            lifeArea : vm.editInfo.lifeArea,
            workPosition : vm.editInfo.workPosition,
            oldWorkPlace : vm.editInfo.oldWorkPlace,
            workRight : vm.editInfo.workRight,
            grouthArea:vm.editInfo.grouthArea,
            marketReceptTime:vm.editInfo.marketReceptTime
        };
        basicinfoSer.editCustomerbaseinfo(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.customer.basicinfo.list[12]');
                toastr.success( vm.editInfo.customerName+"编辑成功", '温馨提示');
            }else if(response.data.code==403||response.data.code==401){
                toastr.error( "请登录用户,2秒后跳至登陆页面", '温馨提示');
                var absurl = $location.absUrl();
                ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes',domain:'issp.bjike.com' });
                setTimeout(function(){
                    window.location.href='http://user.issp.bjike.com'
                },2000)
            }else if(response.data.code==1){
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };



});






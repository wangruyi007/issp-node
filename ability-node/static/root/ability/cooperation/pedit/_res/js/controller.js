var app = angular.module('cooperationPEdit', ['toastr','ipCookie']);
app.controller('cooperationPEditCtrl', function($scope, cooperationSer,$state,toastr,$stateParams,ipCookie,$location){
    var selfcapId = {id : $stateParams.id};
    //获取值
    cooperationSer.getThreeById(selfcapId).then(function(response){
        if(response.data.code==0){
            $scope.peditInfo = response.data.data;
        }else if(response.data.code==1){
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    $scope.cooperationPEditFun = function(){
        var vm = $scope;
        var data = {
            id:vm.peditInfo.id,
            contactName:vm.peditInfo.contactName,
            sex: vm.peditInfo.sex,
            contactWay: vm.peditInfo.contactWay,
            emailName: vm.peditInfo.emailName,
            qqOrWechat: vm.peditInfo.qqOrWechat,
            natives: vm.peditInfo.natives,
            hobby: vm.peditInfo.hobby,
            charact: vm.peditInfo.charact,
            family: vm.peditInfo.family,
            familyRelation: vm.peditInfo.familyRelation,
            studyExperience: vm.peditInfo.studyExperience,
            connectExperience: vm.peditInfo.connectExperience,
            oldWorkPlace: vm.peditInfo.oldWorkPlace,
            livePlace: vm.peditInfo.livePlace,
            growthPlace: vm.peditInfo.growthPlace,
            createTime: vm.peditInfo.createTime,
            modifyTime: vm.peditInfo.modifyTime,
        };
        cooperationSer.editRelation(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.ability.cooperation.list');
                toastr.success( vm.peditInfo.contactName+"已成功编辑", '温馨提示');
            }else if (response.data.code == 403||response.data.code==401) {
                toastr.error( "请登录用户,3秒后跳至登陆页面", '温馨提示');
                var absurl = $location.absUrl();
                ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes',domain:'issp.bjike.com' })
                setTimeout(function(){
                    window.location.href='http://localhost/login'
                },3000)
            }else if(response.data.code==1){
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
});
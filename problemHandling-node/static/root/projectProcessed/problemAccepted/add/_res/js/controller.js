var app = angular.module('problemAdd', ['toastr','ipCookie']);
app.controller('problemAddCtrl', function ($scope, problemSer, $state, toastr,$location,ipCookie) {

    //添加
    // var selects = [
    //     {
    //         name: 'projectType',
    //         list: {OUTSOURCING: '外包', RENT: '租赁'}
    //     },
    //     {
    //         name: 'noticeWay',
    //         list: {WRITTEN: '书面', MAIL: '邮件', ORAL: '口头'}
    //     },
    //     {
    //         name: 'problemTypes',
    //         list: {PROGRESSCLASS: '进度类', DELIVERCLASS: '交付类', DEVICECLASS: '设备类'}
    //     },
    //     {
    //         name: 'problemEmergencyDegree',
    //         list: {INTERMEDIATE: '中级', EMERGENCY: '紧急'}
    //     },
    //     {
    //         name: 'problemProcessingTime',
    //         list: {FOURTOTWENTYFOURHOURS: '4-24小时之类', TWENTYFOURHOURS: '24小时以上'}
    //     },
    //     {
    //         name: 'affectedDepartment',
    //         list: {TWOTOTHREEDEPARTMENT: '影响2-3个部门', THREEDEPARTMENT: '影响3个部门以上'}
    //     }
    // ];

    $scope.problemAddFun = function () {
        var vm = $scope;
        vm.accepted.year = angular.element('.addYear').val();

        // selects.forEach(function (select) {
        //
        //     if (vm.accepted[select.name]) {
        //         var isFind;
        //         for (var name in select.list) {
        //             var text = select.list[name];
        //             if (vm.accepted[select.name] == text) {
        //                 vm.accepted[select.name] = name;
        //                 isFind = name;
        //                 break;
        //             }
        //         }
        //         if(isFind){
        //             vm.accepted[select.name] = isFind;
        //         }else{
        //             for (var name in select.list) {
        //                 var text = select.list[name];
        //                 if (vm.accepted[select.name+"_default"] == text) {
        //                     vm.accepted[select.name+"_default"] = name;
        //                     isFind = name;
        //                     break;
        //                 }
        //             }
        //             vm.accepted[select.name] = isFind;
        //         }
                // if(!isFind){
                //     for (var name in select.list) {
                //         var text = select.list[name];
                //         if (vm.accepted[select.name] == text) {
                //             vm.accepted[select.name] = name;
                //             isFind = name;
                //             break;
                //         }
                //     }
                //
                // }
            // }
        // });
        problemSer.addProblem(vm.accepted).then(function (response) {
            if (response.data.code == 0) {
                $state.go('root.projectProcessed.problemAccepted.list');
                toastr.success("已成功添加", '温馨提示');
            }else if(response.data.code==403||response.data.code==401){
                toastr.error( "请登录用户,2秒后跳至登陆页面", '温馨提示');
                var absurl = $location.absUrl();
                ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes',domain:'issp.bjike.com' });
                setTimeout(function(){
                    window.location.href='http://localhost/login';
                },2000)
            }else if(response.data.code==1){
                toastr.error( response.data.msg, '温馨提示');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

    //可手填的下拉框
    $scope.changeSelect = function () {
        $scope.accepted.projectType = $scope.accepted.projectType1;
    };

});





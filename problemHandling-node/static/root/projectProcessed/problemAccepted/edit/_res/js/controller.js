var app = angular.module('problemEdit', ['toastr']);
app.controller('problemEditCtrl', function($scope, problemSer,$stateParams,$state,toastr){
    var problemData ={id: $stateParams.id};

    //获取ID
    problemSer.findProblemId(problemData).then(function(response){
        if(response.data.code=='0'){
            $scope.editAccept = response.data.data;
        }else if (response.data.code==403){
            toastr.error( "请登录用户", '温馨提示');
        }

    });

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
    //编辑点击提交
    $scope.problemEditFun = function(){
        var vm = $scope;
        // selects.forEach(function (select) {
        //     if (vm.editAccept[select.name]) {
        //         var isFind;
        //         for (var name in select.list) {
        //             var text = select.list[name];
        //             if (vm.editAccept[select.name] == text) {
        //                 vm.editAccept[select.name] = name;
        //                 isFind = name;
        //                 break;
        //             }
        //         }
        //         if(isFind){
        //             vm.editAccept[select.name] = isFind;
        //         }else{
        //             for (var name in select.list) {
        //                 var text = select.list[name];
        //                 if (vm.editAccept[select.name+"_default"] == text) {
        //                     vm.editAccept[select.name+"_default"] = name;
        //                     isFind = name;
        //                     break;
        //                 }
        //             }
        //             vm.editAccept[select.name] = isFind;
        //         }
        //     }
        // });
        problemSer.editProblem(vm.editAccept).then(function(response){
            if(response.data.code == 0){
                $state.go('root.projectProcessed.problemAccepted.list');
                toastr.success( "编辑成功", '温馨提示');
            }else if(response.data.code == 403){
                toastr.error( "请登录用户", '温馨提示');
            }
        });

    };
    //可手填的下拉框
    $scope.changeSelect = function () {
        $scope.editAccept.projectType = $scope.editAccept.projectType1;
    };

});






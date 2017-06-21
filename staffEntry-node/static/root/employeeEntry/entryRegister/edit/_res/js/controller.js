var app = angular.module('entryRegisterEdit', ['toastr']);
app.controller('entryRegisterEditCtrl', function($scope, registerSer,$state,toastr,$stateParams){
    var companyId = {id : $stateParams.id};
    //获取id对应的数据
    registerSer.getOneById1(companyId).then(function(response){
        if(response.data.code==0){
            $scope.data = response.data.data;
            $scope.h = response.data.data.familyMemberVOList || [{}];//家庭
            $scope.s = response.data.data.studyExperienceVOList || [{}];//学习
            $scope.w = response.data.data.workExperienceVOList || [{}];//工作
            $scope.c = response.data.data.credentialVOList || [{}];//奖励
            delete $scope.data.familyMemberVOList;
            delete $scope.data.studyExperienceVOList;
            delete $scope.data.workExperienceVOList;
            delete $scope.data.credentialVOList;
            //把后台返回的obj修改成相对应的数组
            $scope.data.titles = [];
            $scope.data.names = [];
            $scope.data.ages = [];
            $scope.data.units = [];
            $scope.data.positions = [];
            $scope.data.phones = [];
            angular.forEach($scope.h,function(val,index){
                if(val){
                    var arr = ['title','name','age','unit','position','phone'];
                    for(let i =0;i<arr.length;i++){
                        if(!val[arr[i]]){
                            val[arr[i]] = '';
                        }
                    }
                    for(key in val){
                        // debugger
                        switch(key){
                            case 'title':
                                $scope.data.titles.push(val[key]);
                                break;
                            case 'name':
                                $scope.data.names.push(val[key]);
                                break;
                            case 'age':
                                $scope.data.ages.push(val[key]);
                                break;
                            case 'unit':
                                $scope.data.units.push(val[key]);
                                break;
                            case 'position':
                                $scope.data.positions.push(val[key]);
                                break;
                            case 'phone':
                                $scope.data.phones.push(val[key]);
                                break;

                        }
                    }
                }
            })
            $scope.data.studyStartTimes = [];
            $scope.data.studyEndTimes = [];
            $scope.data.schools = [];
            $scope.data.certificates = [];
            angular.forEach($scope.s,function(val,index){
                if(val){
                    var arr = ['startTime','endTime','school','certificate'];
                    for(let i =0;i<arr.length;i++){
                        if(!val[arr[i]]){
                            val[arr[i]] = '';
                        }
                    }
                    for(key in val){
                        switch(key){
                            case 'startTime':
                                $scope.data.studyStartTimes.push(val[key]);
                                break;
                            case 'endTime':
                                $scope.data.studyEndTimes.push(val[key]);
                                break;
                            case 'school':
                                $scope.data.schools.push(val[key]);
                                break;
                            case 'certificate':
                                $scope.data.certificates.push(val[key]);
                                break;
                        }
                    }
                }
            })
            $scope.data.workStartTimes = [];
            $scope.data.workEndTimes = [];
            $scope.data.firms = [];
            $scope.data.jobDescriptions = [];
            angular.forEach($scope.w,function(val,index){
                if(val){
                    var arr = ['startTime','endTime','firm','jobDescription'];
                    for(let i =0;i<arr.length;i++){
                        if(!val[arr[i]]){
                            val[arr[i]] = '';
                        }
                    }
                    for(key in val){
                        switch(key){
                            case 'startTime':
                                $scope.data.workStartTimes.push(val[key]);
                                break;
                            case 'endTime':
                                $scope.data.workEndTimes.push(val[key]);
                                break;
                            case 'firm':
                                $scope.data.firms.push(val[key]);
                                break;
                            case 'jobDescription':
                                $scope.data.jobDescriptions.push(val[key]);
                                break;
                        }
                    }
                }
            })
            $scope.data.nameses = [];
            $scope.data.obtainTimes = [];
            angular.forEach($scope.c,function(val,index){
                if(val){
                    var arr = ['name','obtainTime'];
                    for(let i =0;i<arr.length;i++){
                        if(!val[arr[i]]){
                            val[arr[i]] = '';
                        }
                    }
                    for(key in val){
                        switch(key){
                            case 'name':
                                $scope.data.nameses.push(val[key]);
                                break;
                            case 'obtainTime':
                                $scope.data.obtainTimes.push(val[key]);
                                break;
                        }
                    }
                }
            })
        }
    });
    //家庭成员
    $scope.homes = [{},{},{},{}];
    //学习经历

    $scope.studies = [{a:'a',b:'ba'},{a:'b',b:'bb'},{a:'c',b:'bc'},{a:'d',b:'bd'}];//给学习时间添加类数组

    //工作经历

    $scope.works = [{a:'a1',b:'be'},{a:'b1',b:'bf'},{a:'c1',b:'bg'},{a:'d1',b:'bh'}];//给工作时间添加类数组

    //证书情况

    $scope.certificates = [{a:'e1'},{a:'e2'},{a:'e3'},{a:'e4'}];//给证书情况添加类数组

    //点击提交
    $scope.EditFun =function(){
        $scope.data.birthday = angular.element('.birthday').val();
        $scope.data.graduationDate = angular.element('.graduationDate').val();
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
        data.id = companyId.id;
        tools(data);
        registerSer.editData(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.employeeEntry.entryRegister.list');
                toastr.success('温馨提示',"此次编辑成功");
            }else {
                toastr.error(response.data.msg,'温馨提示')
            }
        })
    }
});
function tools(obj){
    if(obj){
        for(key in obj){
            if(typeof obj[key] == 'object'){
                fn(obj[key]);
            }
        }
    }
    function fn(obj){
        if(obj){
            for(let i =0;i < 4;i++){
                if(!obj[i]){
                    obj[i] = '';
                }
            }
        }
    }
}

//添加空
function sj(obj,val1,val2,val3,val4,val5,val6){

}
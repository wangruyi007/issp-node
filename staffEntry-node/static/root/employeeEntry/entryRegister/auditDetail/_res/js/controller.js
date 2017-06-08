var app = angular.module('auditDetail', ['toastr']);
app.controller('auditDetailCtrl',function($scope,registerSer,toastr,$stateParams) {
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
    $scope.studies = [{a:'a',b:'a'},{a:'b',b:'b'},{a:'c',b:'c'},{a:'d',b:'d'}];//给学习时间添加类数组
    //工作经历
    $scope.works = [{a:'a',b:'a'},{a:'b',b:'b'},{a:'c',b:'c'},{a:'d',b:'d'}];//给工作时间添加类数组
    //证书情况
    $scope.certificates = [{a:'a'},{a:'b'},{a:'c'},{a:'d'}];//给证书情况添加类数组
});

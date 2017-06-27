var app = angular.module('detailEdit', ['toastr','ipCookie']);
app.controller('detailEditCtrl', function($scope, $state,detailSer, toastr, $stateParams,ipCookie,$location){

    var cusNum = {customerNum : $stateParams.cusNum};

    detailSer.getInfoByCustomerNum(cusNum).then(function(response){
        if(response.data.code==0){
            $scope.details = response.data.data;
            $scope.allFamilyEdit=$scope.details.cusFamilyMemberVOList || [{}];
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    $scope.tab={
        current: "_basic"
    }
    $scope.boardBtn=function(name){
        $scope.tab.current = name;
    }
    /*$scope.allFamilyEdit =[{}];*/
    $scope.add = function(){
        var obj = {};
        $scope.allFamilyEdit.push(obj);
    }
    $scope.del = function(flag){
        $scope.allFamilyEdit.splice(flag,1);
    }
    $scope.detailEditFun = function(){
        var vm = $scope;
        var data = {
            id:vm.details.id,
            customerNum : vm.details.customerNum,
            age : vm.details.age,
            birthday:angular.element('#birthdayEdit').val(),
            workExperience:vm.details.workExperience,
            studyExperience:vm.details.studyExperience,
            love:vm.details.love,
            characterEvaluation:vm.details.characterEvaluation,
            cusFamilyMemberTOList:angular.copy($scope.allFamilyEdit),
        }
        var addData = converFormData(data);
        detailSer.editCustomerDetail(addData).then(function(response){
            if(response.data.code == 0){
                $state.go('root.customer.detail.list[12]');
                toastr.success("已编辑成功", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        })
    };


});


//数组类型转换工具
function converFormData() {
    var objToFormData = function(obj,obj2,sec){
        if(obj){
            var count = 0;
            for(var name in obj){
                var val = obj[name];
                if(val instanceof Array){
                    val.forEach(function (item,index) {
                        for(var name2 in item){
                            var val2 = item[name2];
                            if(val2 instanceof Array){
                                val2.forEach(function (dItem,dIndex) {
                                    objToFormData(dItem,obj,name+'['+index+'].'+name2);
                                });
                            }else{
                                if((typeof val2)!='function'){
                                    obj[name+'['+index+'].'+name2] = val2;
                                }
                            }
                        }
                    });
                    delete obj[name];
                }else if(sec){
                    if((typeof val)!='function'){
                        obj2[sec+'['+count+'].'+name] = val;
                        count++;
                    }
                }
            }
        }

    }
    var _obj = $.extend(true,{},arguments[0]);
    objToFormData(_obj);
    return _obj;
}







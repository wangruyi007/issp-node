var app = angular.module('detailAdd', ['toastr','ipCookie']);
app.controller('detailAddCtrl', function($scope, detailSer, $state,$location,toastr,ipCookie){

    detailSer.getCusNum().then(function(response){
        if(response.data.code==0){
            $scope.cusnums = response.data.data
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });

    var cusinfo = {customerNum:$location.search().cusnum};
    $scope.cusnumUrl=$location.search().cusnum;
    if($scope.cusnumUrl!=undefined&&$scope.cusnumUrl!=''){
        detailSer.getCustomers(cusinfo).then(function(response){
            if(response.data.code==0){
                $scope.customerInfo = response.data.data;
            }else if(response.data.code==1){
                toastr.error( response.data.msg, '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        })
    }
    $scope.changNum =function(event){
        $scope.cusnumUrl = event;
        $location.search('cusnum',event);
        if(event!=''){
            var changeCus={customerNum:event};
            detailSer.getCustomers(changeCus).then(function(response){
                if(response.data.code==0){
                    $scope.customerInfo = response.data.data;
                }else if(response.data.code==1){
                    toastr.error( response.data.msg, '温馨提示');
                }
            })
        }
    }
    $scope.tab={
        current: "_basic"
    }
    $scope.boardBtn=function(name){
        $scope.tab.current = name;
    }
    $scope.allFamily =[{}];
    $scope.add = function(){
        var obj = {};
        $scope.allFamily.push(obj);
    }
    $scope.del = function(flag){
        $scope.allFamily.splice(flag,1);
    }

    $scope.detailAddFun = function(){
        var data = {
            customerNum:$scope.customerInfo.customerNum,
            age:$scope.detailage,
            birthday:angular.element('#birthday').val(),
            workExperience:$scope.wordexpe,
            studyExperience:$scope.studyexpe,
            love:$scope.bobby,
            characterEvaluation:$scope.character,
            cusFamilyMemberTOList:angular.copy($scope.allFamily),
        }
        var addData = converFormData(data);
        detailSer.addCustomerDetail(addData).then(function(response){
            if(response.data.code == 0){
                $state.go('root.customer.detail.list[12]');
                toastr.success("客户信息已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        })

    }

});

//数据类型转换工具
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






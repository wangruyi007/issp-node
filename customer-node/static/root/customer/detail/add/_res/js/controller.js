var app = angular.module('detailAdd', ['toastr','ipCookie']);
app.controller('detailAddCtrl', function($scope, detailSer, $state,$location,toastr,ipCookie){


    detailSer.getCusNum().then(function(response){
        if(response.data.code==0){
            $scope.cusnums = response.data.data
        }else{
            toastr.error( response.data.msg, '温馨提示');
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
    $scope.changNum = function(event){
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

    $scope.detailAddFun = function(){


        var data = {
            customerNum:$scope.customerInfo.customerNum,
            age:$scope.detailage,
            birthday:angular.element('#birthday').val(),
            workExperience:$scope.wordexpe,
            studyExperience:$scope.studyexpe,
            love:$scope.bobby,
            characterEvaluation:$scope.character,
        }

        detailSer.addCustomerDetail(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.customer.detail.list');
                toastr.success( "客户信息已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        })

    }

});






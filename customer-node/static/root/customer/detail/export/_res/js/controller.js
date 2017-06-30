var app = angular.module('detailExport', ['toastr','angularjs-dropdown-multiselect']);
app.controller('detailExportCtrl', function($scope, detailSer,$state,toastr){
    $scope.areas = [];
    $scope.customerNames = [];
    $scope.stringSettings = {template : '{{option}}', smartButtonTextConverter(skip, option) { return option; }};
    //获取用户名信息
    detailSer.alldetailName().then(function(response){
        if(response.data.code==0){
            $scope.projectName = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    //获取地区信息
    detailSer.alldetailArea().then(function(response){
        if(response.data.code==0){
            $scope.projectArea = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });

    //导出
    $scope.workersAddFun = function(){
        var obj = {
            areas:$scope.areas,
            customerNames : $scope.customerNames
        };
        window.open(`/customerdetail/exportInfo${encode(obj,true)}`);
    };
});
function encode(){
    var obj = arguments[0];
    var contacat = false;
    if (arguments[1]){
        contacat = true;
    }
    var str = '';
    var count = 0;
    for (var name in obj) {
        if (obj[name]&&( typeof obj[name]) != 'function') {
                str += (((contacat && count == 0) ? '?' : '&') + name + '=' + obj[name]);
                count++;
        }
    }
    return encodeURI(str);
}



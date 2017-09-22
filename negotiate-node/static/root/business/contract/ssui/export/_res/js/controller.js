var app = angular.module('ssuiExport', ['toastr']);
app.controller('ssuiExportCtrl', function($scope, ssuiSer,$state,toastr){
    //获取内部项目编号
    ssuiSer.ssuiProjects().then(function(response){

        if(response.data.code==0){
            $scope.ssuiProjects = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    //添加
    $scope.workersAddFun = function(){
        var obj = {
            contractInProject:$scope.contractInProject
        };
        console.log(obj)
        window.open(`/ssuiExport/export${encode(obj,true)}`);
    };

});
function encode(){
    var obj = arguments[0];
    var contacat = false;
    if (arguments[1]) {
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



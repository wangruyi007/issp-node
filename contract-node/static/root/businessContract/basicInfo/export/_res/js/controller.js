var app = angular.module('basicExport', ['toastr','angularjs-dropdown-multiselect']);
app.controller('basicExportCtrl', function($scope, basicSer,$state,toastr){
    $scope.Projects = [];
    $scope.stringSettings = {template : '{{option}}', smartButtonTextConverter(skip, option) { return option; }};
    //获取内部项目编号
    basicSer.allProject().then(function(response){
        if(response.data.code==0){
            $scope.projectName = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    //导出
    $scope.workersAddFun = function(){
        var obj = {
            innerProjects : $scope.Projects
        };
        window.open(`/baseinfomanage/exportExcel${encode(obj,true)}`);
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



var app = angular.module('MaterialExport', ['toastr','angularjs-dropdown-multiselect']);
app.controller('MaterialExportCtrl', function($scope, MaterialSer,$state,toastr){
    $scope.Projects = [];
    $scope.stringSettings = {template : '{{option}}', smartButtonTextConverter(skip, option) { return option; }};
    //获取内部项目编号
    MaterialSer.getProjectName().then(function(response){
        if(response.data.code==0){
            $scope.projectNames = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    //添加
    $scope.workersAddFun = function(){
        var obj = {
            projectName:$scope.Projects
        };
        console.log(obj)
        window.open(`/materialExport/export${encode(obj,true)}`);
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



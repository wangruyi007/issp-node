var app = angular.module('salaryconfirm', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.compete.salaryconfirm", {
        url : "/salaryconfirm",
        views : {
            "content@root.compete" : {
                templateUrl : "root/compete/salaryconfirm/_res/html/index.html",
                controller:"salaryconfirmCtrl"
            },"menu@root.compete" : {
                templateUrl : "root/compete/salaryconfirm/_res/html/menu.html",
                controller:"salaryconfirmMenuCtrl"
            }
        }
    }).state("root.compete.salaryconfirm.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.compete.salaryconfirm":{
                templateUrl : "root/compete/salaryconfirm/add/_res/html/index.html",
                controller:'salaryconfirmAddCtrl'
            }
        }
    }).state("root.compete.salaryconfirm.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.compete.salaryconfirm":{
                templateUrl : "root/compete/salaryconfirm/edit/_res/html/index.html",
                controller:'salaryconfirmEditCtrl'
            }
        }
    }).state("root.compete.salaryconfirm.import[12]",{
        url:"/import[12]?id=",
        views:{
            "content@root.compete.salaryconfirm":{
                templateUrl : "root/compete/salaryconfirm/import/_res/html/index.html",
                controller:'salaryconfirmImportCtrl'
            }
        }
    }).state("root.compete.salaryconfirm.export[12]",{
        url:"/export[12]?id=",
        views:{
            "content@root.compete.salaryconfirm":{
                templateUrl : "root/compete/salaryconfirm/export/_res/html/index.html",
                controller:'salaryconfirmExportCtrl'
            }
        }
    })
});
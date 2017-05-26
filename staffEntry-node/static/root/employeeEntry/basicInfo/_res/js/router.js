var app = angular.module('basicInfo', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.employeeEntry.basicInfo", {
        url : "/basicInfo",
        views : {  
            "content@root.employeeEntry" : {
                templateUrl : "root/employeeEntry/basicInfo/_res/html/index.html",
                controller:"basicInfoCtrl"
            },"menu@root.employeeEntry" : {
                templateUrl : "root/employeeEntry/basicInfo/_res/html/menu.html",
                controller:"basicInfoMenuCtrl"
            }
        }
    }).state("root.employeeEntry.basicInfo.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.employeeEntry.basicInfo":{
                templateUrl : "root/employeeEntry/basicInfo/add/_res/html/index.html",
                controller:'basicInfoAddCtrl'
            }
        }
    }).state("root.employeeEntry.basicInfo.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.employeeEntry.basicInfo":{
                templateUrl : "root/employeeEntry/basicInfo/edit/_res/html/index.html",
                controller:'basicInfoEditCtrl'
            }
        }
    }).state("root.employeeEntry.basicInfo.entrySummary[12]",{
        url:"/entrySummary[12]",
        views:{
            "content@root.employeeEntry.basicInfo":{
                templateUrl : "root/employeeEntry/basicInfo/entrySummary/_res/html/index.html",
                controller:'entrySummaryCtrl'
            }
        }
    })
});
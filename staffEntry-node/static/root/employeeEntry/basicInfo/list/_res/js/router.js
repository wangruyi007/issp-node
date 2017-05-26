var app = angular.module('basicInfoList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.employeeEntry.basicInfo.list",{
        url:"/list",
        views:{
            "content@root.employeeEntry.basicInfo":{
                templateUrl : "root/employeeEntry/basicInfo/list/_res/html/index.html",
                controller:'basicInfoListCtrl'
            }
        }
    }).state("root.employeeEntry.basicInfo.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.employeeEntry.basicInfo.list":{
                templateUrl : "root/employeeEntry/basicInfo/list/delete/_res/html/index.html",
                controller:'DeleteCtrl'
            }
        }
    })
});
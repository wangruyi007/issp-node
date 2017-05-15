var app = angular.module('basicInfoList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.assessment.basicInfo.list",{
        url:"/list",
        views:{
            "content@root.assessment.basicInfo":{
                templateUrl : "root/assessment/basicInfo/list/_res/html/index.html",
                controller:'basicInfoListCtrl'
            }
        }
    }).state("root.assessment.basicInfo.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.assessment.basicInfo.list":{
                templateUrl : "root/assessment/basicInfo/list/delete/_res/html/index.html",
                controller:'basicInfoDeleteCtrl'
            }
        }
     })
});
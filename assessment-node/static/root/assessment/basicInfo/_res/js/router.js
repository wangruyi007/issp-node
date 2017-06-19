var app = angular.module('basicInfo', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.assessment.basicInfo", {
        url : "/basicInfo",
        views : {
            "content@root.assessment" : {
                templateUrl : "root/assessment/basicInfo/_res/html/index.html",
                controller:"basicInfoCtrl"
            },"menu@root.assessment" : {
                templateUrl : "root/assessment/basicInfo/_res/html/menu.html",
                controller:"basicInfoMenuCtrl"
            }
        }
    }).state("root.assessment.basicInfo.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.assessment.basicInfo":{
                templateUrl : "root/assessment/basicInfo/add/_res/html/index.html",
                controller:'basicInfoAddCtrl'
            }
        }
    }).state("root.assessment.basicInfo.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.assessment.basicInfo":{
                templateUrl : "root/assessment/basicInfo/edit/_res/html/index.html",
                controller:'basicInfoEditCtrl'
            }
        }
    }).state("root.assessment.basicInfo.list[12]",{
        url:"/list[12]?id=&name=",
        views:{
            "content@root.assessment.basicInfo":{
                templateUrl : "root/assessment/basicInfo/list/_res/html/index.html",
                controller:'basicInfoListCtrl'
            }
        }
    })
});
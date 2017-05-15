var app = angular.module('basicInfo', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.subsidiary.basicInfo", {
        url : "/basicInfo",
        views : {
            "content@root.subsidiary" : {
                templateUrl : "root/subsidiary/basicInfo/_res/html/index.html",
                controller:"basicInfoCtrl"
            },"menu@root.subsidiary" : {
                templateUrl : "root/subsidiary/basicInfo/_res/html/menu.html",
                controller:"basicInfoMenuCtrl"
            }
        }
    }).state("root.subsidiary.basicInfo.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.subsidiary.basicInfo":{
                templateUrl : "root/subsidiary/basicInfo/add/_res/html/index.html",
                controller:'basicInfoAddCtrl'
            }
        }
    }).state("root.subsidiary.basicInfo.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.subsidiary.basicInfo":{
                templateUrl : "root/subsidiary/basicInfo/edit/_res/html/index.html",
                controller:'basicInfoEditCtrl'
            }
        }
    }).state("root.subsidiary.basicInfo.summary[12]",{
        url:"/summary[12]",
        views:{
            "content@root.subsidiary.basicInfo":{
                templateUrl : "root/subsidiary/basicInfo/summary/_res/html/index.html",
                controller:'basicInfoSummaryCtrl'
            }
        }
    })
});
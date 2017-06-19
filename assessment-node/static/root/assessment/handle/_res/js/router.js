var app = angular.module('handle', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.assessment.handle", {
        url : "/handle",
        views : {
            "content@root.assessment" : {
                templateUrl : "root/assessment/handle/_res/html/index.html",
                controller:"handleCtrl"
            },"menu@root.assessment" : {
                templateUrl : "root/assessment/handle/_res/html/menu.html",
                controller:"handleMenuCtrl"
            }
        }
    }).state("root.assessment.handle.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.assessment.handle":{
                templateUrl : "root/assessment/handle/add/_res/html/index.html",
                controller:'handleAddCtrl'
            }
        }
    }).state("root.assessment.handle.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.assessment.handle":{
                templateUrl : "root/assessment/handle/edit/_res/html/index.html",
                controller:'handleEditCtrl'
            }
        }
    }).state("root.assessment.handle.qualitative[12]",{
        url:"/qualitative[12]?id=",
        views:{
            "content@root.assessment.handle":{
                templateUrl : "root/assessment/handle/qualitative/_res/html/index.html",
                controller:'qualitativeListCtrl'
            }
        }
    }).state("root.assessment.handle.ration[12]",{
        url:"/ration[12]?id=",
        views:{
            "content@root.assessment.handle":{
                templateUrl : "root/assessment/handle/ration/_res/html/index.html",
                controller:'rationListCtrl'
            }
        }
    }).state("root.assessment.handle.list[12]",{
        url:"/list[12]?id=&name=",
        views:{
            "content@root.assessment.handle":{
                templateUrl : "root/assessment/handle/list/_res/html/index.html",
                controller:'handleListCtrl'
            }
        }
    })
});
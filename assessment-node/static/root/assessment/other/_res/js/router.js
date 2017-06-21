var app = angular.module('other', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.assessment.other", {
        url : "/other",
        views : {
            "content@root.assessment" : {
                templateUrl : "root/assessment/other/_res/html/index.html",
                controller:"otherCtrl"
            },"menu@root.assessment" : {
                templateUrl : "root/assessment/other/_res/html/menu.html",
                controller:"otherMenuCtrl"
            }
        }
    }).state("root.assessment.other.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.assessment.other":{
                templateUrl : "root/assessment/other/add/_res/html/index.html",
                controller:'otherAddCtrl'
            }
        }
    }).state("root.assessment.other.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.assessment.other":{
                templateUrl : "root/assessment/other/edit/_res/html/index.html",
                controller:'otherEditCtrl'
            }
        }
    }).state("root.assessment.other.list[12]",{
        url:"/list[12]?id=&name=",
        views:{
            "content@root.assessment.other":{
                templateUrl : "root/assessment/other/list/_res/html/index.html",
                controller:'otherListCtrl'
            }
        }
    })
});
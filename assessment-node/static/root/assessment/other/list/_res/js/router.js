var app = angular.module('otherList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.assessment.other.list",{
        url:"/list",
        views:{
            "content@root.assessment.other":{
                templateUrl : "root/assessment/other/list/_res/html/index.html",
                controller:'otherListCtrl'
            }
        }
    }).state("root.assessment.other.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.assessment.other.list":{
                templateUrl : "root/assessment/other/list/delete/_res/html/index.html",
                controller:'otherDeleteCtrl'
            }
        }
     })
});
var app = angular.module('personDemandList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.projectmeasure.manage.personDemand.list",{
        url:"/list",
        views:{
            "content@root.projectmeasure.manage.personDemand":{
                templateUrl : "root/projectmeasure/manage/personDemand/list/_res/html/index.html",
                controller:'personDemandListCtrl'
            }
        }
    }).state("root.projectmeasure.manage.personDemand.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.projectmeasure.manage.personDemand.list":{
                templateUrl : "root/projectmeasure/manage/personDemand/list/delete/_res/html/index.html",
                controller:'personDemandDeleteCtrl'
            }
        }
    })
});
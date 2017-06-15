var app = angular.module('punishmentList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.projectBonus.punishment.list",{
        url:"/list",
        views:{
            "content@root.projectBonus.punishment":{
                templateUrl : "root/projectBonus/punishment/list/_res/html/index.html",
                controller:'punishmentListCtrl'
            }
        }
    }).state("root.projectBonus.punishment.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.projectBonus.punishment.list":{
                templateUrl : "root/projectBonus/punishment/list/delete/_res/html/index.html",
                controller:'punishmentDeleteCtrl'
            }
        }
    })
});
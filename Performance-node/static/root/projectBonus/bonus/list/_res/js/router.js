var app = angular.module('bonusList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.projectBonus.bonus.list",{
        url:"/list",
        views:{
            "content@root.projectBonus.bonus":{
                templateUrl : "root/projectBonus/bonus/list/_res/html/index.html",
                controller:'bonusListCtrl'
            }
        }
    }).state("root.projectBonus.bonus.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.projectBonus.bonus.list":{
                templateUrl : "root/projectBonus/bonus/list/delete/_res/html/index.html",
                controller:'bonusDeleteCtrl'
            }
        }
    }).state("root.projectBonus.bonus.list.freeze[12]",{
        url:"/freeze[12]?id=",
        views:{
            "modal@root.projectBonus.bonus.list":{
                templateUrl : "root/projectBonus/bonus/list/freeze/_res/html/index.html",
                controller:'bonusFreezeCtrl'
            }
        }
    })
});
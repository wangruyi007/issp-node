var app = angular.module('rewardList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.projectBonus.reward.list",{
        url:"/list",
        views:{
            "content@root.projectBonus.reward":{
                templateUrl : "root/projectBonus/reward/list/_res/html/index.html",
                controller:'rewardListCtrl'
            }
        }
    }).state("root.projectBonus.reward.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.projectBonus.reward.list":{
                templateUrl : "root/projectBonus/reward/list/delete/_res/html/index.html",
                controller:'rewardDeleteCtrl'
            }
        }
    })
});
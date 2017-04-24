/**
 * Created by ike on 2017/4/13.
 */
var app = angular.module('companycapList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.ability.companycap.list",{
        url:"/list",
        views:{
            "content@root.ability.companycap":{
                templateUrl : "root/ability/companycap/list/_res/html/index.html",
                controller:'companycapListCtrl'
            }
        }
    }).state("root.ability.companycap.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.ability.companycap.list":{
                templateUrl : "root/ability/companycap/list/delete/_res/html/index.html",
                controller:'companycapDeleteCtrl'
            }
        }
    })
});
/**
 * Created by ike on 2017/4/13.
 */
var app = angular.module('selfcapList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.ability.selfcap.list",{
        url:"/list",
        views:{
            "content@root.ability.selfcap":{
                templateUrl : "root/ability/selfcap/list/_res/html/index.html",
                controller:'selfcapListCtrl'
            }
        }
    }).state("root.ability.selfcap.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.ability.selfcap.list":{
                templateUrl : "root/ability/selfcap/list/delete/_res/html/index.html",
                controller:'selfcapDeleteCtrl'
            }
        }
    })
});
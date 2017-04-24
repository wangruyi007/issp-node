/**
 * Created by ike on 2017/4/13.
 */
var app = angular.module('cooperationList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.ability.cooperation.list",{
        url:"/list",
        views:{
            "content@root.ability.cooperation":{
                templateUrl : "root/ability/cooperation/list/_res/html/index.html",
                controller:'cooperationListCtrl'
            }
        }
    }).state("root.ability.cooperation.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.ability.cooperation.list":{
                templateUrl : "root/ability/cooperation/list/delete/_res/html/index.html",
                controller:'cooperationDeleteCtrl'
            }
        }
    })
});
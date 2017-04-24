/**
 * Created by ike on 2017/4/13.
 */
var app = angular.module('emailList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.ability.email.list",{
        url:"/list",
        views:{
            "content@root.ability.email":{
                templateUrl : "root/ability/email/list/_res/html/index.html",
                controller:'emailListCtrl'
            }
        }
    }).state("root.ability.email.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.ability.email.list":{
                templateUrl : "root/ability/email/list/delete/_res/html/index.html",
                controller:'emailDeleteCtrl'
            }
        }
    }).state("root.ability.email.list.congeal[12]",{
        url:"/congeal[12]?id=",
        views:{
            "modal@root.ability.email.list":{
                templateUrl : "root/ability/email/list/congeal/_res/html/index.html",
                controller:'emailCongealCtrl'
            }
        }
    })
});
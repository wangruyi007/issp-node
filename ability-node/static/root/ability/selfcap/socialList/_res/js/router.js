/**
 * Created by ike on 2017/4/25.
 */
var app = angular.module('socialListBasic', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.ability.selfcap.socialList",{
        url:"/socialList?id=",
        views:{
            "content@root.ability.selfcap":{
                templateUrl : "root/ability/selfcap/socialList/_res/html/index.html",
                controller:'socialListBasicCtrl'
            }
        }
    }).state("root.ability.selfcap.socialList.socialDelete[12]",{
        url:"/socialDelete[12]?subId=",
        views:{
            "modal@root.ability.selfcap.socialList":{
                templateUrl : "root/ability/selfcap/socialList/socialDelete/_res/html/index.html",
                controller:'socialDeleteCtrl'
            }
        }
    }).state("root.ability.selfcap.socialList.socialEdit[12]",{
        url:"/socialEdit[12]?subId=",
        views:{
            "content@root.ability.selfcap.socialList":{
                templateUrl : "root/ability/selfcap/socialList/socialEdit/_res/html/index.html",
                controller:'socialPEditCtrl'
            }
        }
    })
});
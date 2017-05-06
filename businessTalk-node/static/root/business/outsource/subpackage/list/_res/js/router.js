/**
 * Created by ike on 2017/4/13.
 */
var app = angular.module('subpackageList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.business.outsource.subpackage.list",{
        url:"/list",
        views:{
            "content@root.business.outsource.subpackage":{
                templateUrl : "root/business/outsource/subpackage/list/_res/html/index.html",
                controller:'subpackageListCtrl'
            }
        }
    }).state("root.business.outsource.subpackage.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.business.outsource.subpackage.list":{
                templateUrl : "root/business/outsource/subpackage/list/delete/_res/html/index.html",
                controller:'subpackageDeleteCtrl'
            }
        }
    })
});
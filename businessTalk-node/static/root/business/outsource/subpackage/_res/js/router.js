var app = angular.module('subpackage', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.business.outsource.subpackage", {
        url : "/subpackage",
        views : {// outsource  
            "content@root.business.outsource" : {
                templateUrl : "root/business/outsource/subpackage/_res/html/index.html",
                controller:"subpackageCtrl"
            },"menu@root.business.outsource" : {
                templateUrl : "root/business/outsource/subpackage/_res/html/menu.html",
                controller:"subpackageMenuCtrl"
            }
        }
    }).state("root.business.outsource.subpackage.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.business.outsource.subpackage":{
                templateUrl : "root/business/outsource/subpackage/add/_res/html/index.html",
                controller:'subpackageAddCtrl'
            }
        }
    }).state("root.business.outsource.subpackage.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.business.outsource.subpackage":{
                templateUrl : "root/business/outsource/subpackage/edit/_res/html/index.html",
                controller:'subpackageEditCtrl'
            }
        }
    }).state("root.business.outsource.subpackage.collect[12]",{
        url:"/collect[12]?id=",
        views:{
            "content@root.business.outsource.subpackage":{
                templateUrl : "root/business/outsource/subpackage/collect/_res/html/index.html",
                controller:'subpackageCollectCtrl'
            }
        }
    })
});
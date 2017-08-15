var app = angular.module('facility', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.projectRoyalty.facility", {
        url : "/facility",
        views : {
            "content@root.projectRoyalty" : {
                templateUrl : "root/projectRoyalty/facility/_res/html/index.html",
                controller:"facilityCtrl"
            },"menu@root.projectRoyalty" : {
                templateUrl : "root/projectRoyalty/facility/_res/html/menu.html",
                controller:"facilityMenuCtrl"
            }
        }
    }).state("root.projectRoyalty.facility.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.projectRoyalty.facility":{
                templateUrl : "root/projectRoyalty/facility/list/_res/html/index.html",
                controller:'facilityListCtrl'
            }
        }
    }).state("root.projectRoyalty.facility.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.projectRoyalty.facility":{
                templateUrl : "root/projectRoyalty/facility/add/_res/html/index.html",
                controller:'facilityAddCtrl'
            }
        }
    }).state("root.projectRoyalty.facility.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.projectRoyalty.facility":{
                templateUrl : "root/projectRoyalty/facility/edit/_res/html/index.html",
                controller:'facilityEditCtrl'
            }
        }
    })
});
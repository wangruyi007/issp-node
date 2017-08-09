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
    }).state("root.business.outsource.subpackage.list[12]",{
        url:"/list[12]?id=&name=",
        views:{
            "content@root.business.outsource.subpackage":{
                templateUrl : "root/business/outsource/subpackage/list/_res/html/index.html",
                controller:'subpackageListCtrl'
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
    }).state("root.business.outsource.subpackage.upload[12]",{
        url:"/upload[12]?id=",
        views:{
            "content@root.business.outsource.subpackage":{
                templateUrl : "root/business/outsource/subpackage/upload/_res/html/index.html",
                controller:'subpackageUploadCtrl'
            }
        }
    }).state("root.business.outsource.subpackage.view[12]",{
        url:"/view[12]?id=",
        views:{
            "content@root.business.outsource.subpackage":{
                templateUrl : "root/business/outsource/subpackage/view/_res/html/index.html",
                controller:'subpackageViewCtrl'
            }
        }
    }).state("root.business.outsource.subpackage.import[12]",{
        url:"/import[12]",
        views:{
            "content@root.business.outsource.subpackage":{
                templateUrl : "root/business/outsource/subpackage/import/_res/html/index.html",
                controller:'subpackageImportCtrl'
            }
        }
    }).state("root.business.outsource.subpackage.export[12]",{
        url:"/export[12]",
        views:{
            "content@root.business.outsource.subpackage":{
                templateUrl : "root/business/outsource/subpackage/export/_res/html/index.html",
                controller:'subpackageExportCtrl'
            }
        }
    })
});
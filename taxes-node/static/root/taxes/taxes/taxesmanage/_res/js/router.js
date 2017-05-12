var app = angular.module('taxesmanage', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.taxes.taxes.taxesmanage", {
        url : "/taxesmanage",
        views : {  
            "content@root.taxes.taxes" : {
                templateUrl : "root/taxes/taxes/taxesmanage/_res/html/index.html",
                controller:"taxesmanageCtrl"
            },"menu@root.taxes.taxes" : {
                templateUrl : "root/taxes/taxes/taxesmanage/_res/html/menu.html",
                controller:"taxesmanageMenuCtrl"
            }
        }
    }).state("root.taxes.taxes.taxesmanage.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.taxes.taxes.taxesmanage":{
                templateUrl : "root/taxes/taxes/taxesmanage/add/_res/html/index.html",
                controller:'taxesmanageAddCtrl'
            }
        }
    }).state("root.taxes.taxes.taxesmanage.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.taxes.taxes.taxesmanage":{
                templateUrl : "root/taxes/taxes/taxesmanage/edit/_res/html/index.html",
                controller:'taxesmanageEditCtrl'
            }
        }
    }).state("root.taxes.taxes.taxesmanage.view[12]",{
        url:"/view[12]?id=",
        views:{
            "content@root.taxes.taxes.taxesmanage":{
                templateUrl : "root/taxes/taxes/taxesmanage/view/_res/html/index.html",
                controller:'taxesmanageViewCtrl'
            }
        }
    }).state("root.taxes.taxes.taxesmanage.collect[12]",{
        url:"/collect[12]?id=",
        views:{
            "content@root.taxes.taxes.taxesmanage":{
                templateUrl : "root/taxes/taxes/taxesmanage/collect/_res/html/index.html",
                controller:'collectCtrl'
            }
        }
    })
});
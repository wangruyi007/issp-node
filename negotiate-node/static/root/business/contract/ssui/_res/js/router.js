var app = angular.module('ssui', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.business.contract.ssui", {
        url : "/ssui",
        views : {// contract  
            "content@root.business.contract" : {
                templateUrl : "root/business/contract/ssui/_res/html/index.html",
                controller:"ssuiCtrl"
            },"menu@root.business.contract" : {
                templateUrl : "root/business/contract/ssui/_res/html/menu.html",
                controller:"ssuiMenuCtrl"
            }
        }
    }).state("root.business.contract.ssui.list[12]",{
        url:"/list[12]?id=&name=&communicateUser=&communicateObj=&communicateResult=",
        views:{
            "content@root.business.contract.ssui":{
                templateUrl : "root/business/contract/ssui/list/_res/html/index.html",
                controller:'ssuiListCtrl'
            }
        }
    }).state("root.business.contract.ssui.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.business.contract.ssui":{
                templateUrl : "root/business/contract/ssui/add/_res/html/index.html",
                controller:'ssuiAddCtrl'
            }
        }
    }).state("root.business.contract.ssui.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.business.contract.ssui":{
                templateUrl : "root/business/contract/ssui/edit/_res/html/index.html",
                controller:'ssuiEditCtrl'
            }
        }
    }).state("root.business.contract.ssui.collect[12]",{
        url:"/collect[12]?id=",
        views:{
            "content@root.business.contract.ssui":{
                templateUrl : "root/business/contract/ssui/collect/_res/html/index.html",
                controller:'ssuiCollectCtrl'
            }
        }
    }).state("root.business.contract.ssui.upload[12]",{
        url:"/upload[12]?id=",
        views:{
            "content@root.business.contract.ssui":{
                templateUrl : "root/business/contract/ssui/upload/_res/html/index.html",
                controller:'ssuiUploadCtrl'
            }
        }
    }).state("root.business.contract.ssui.view[12]",{
        url:"/view[12]?id=",
        views:{
            "content@root.business.contract.ssui":{
                templateUrl : "root/business/contract/ssui/view/_res/html/index.html",
                controller:'ssuiViewCtrl'
            }
        }
    }).state("root.business.contract.ssui.import[12]",{
        url:"/import[12]",
        views:{
            "content@root.business.contract.ssui":{
                templateUrl : "root/business/contract/ssui/import/_res/html/index.html",
                controller:'ssuiImportCtrl'
            }
        }
    }).state("root.business.contract.ssui.export[12]",{
        url:"/export[12]",
        views:{
            "content@root.business.contract.ssui":{
                templateUrl : "root/business/contract/ssui/export/_res/html/index.html",
                controller:'ssuiExportCtrl'
            }
        }
    })
});
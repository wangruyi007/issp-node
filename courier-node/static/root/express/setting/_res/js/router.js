var app = angular.module('setting', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.express.setting", {
        url : "/setting",
        views : {
            "content@root.express":{
                templateUrl : "root/express/setting/_res/html/index.html",
                controller:"settingCtrl"
            },"menu@root.express":{
                templateUrl : "root/express/setting/_res/html/menu.html",
                controller:"settingMenuCtrl"
            }
        }
    }).state("root.express.setting.list[12]",{
        url:"/list[12]?page=",
        views:{
            "content@root.express.setting":{
                templateUrl : "root/express/setting/list/_res/html/index.html",
                controller:'settingListCtrl'
            }
        }
    }).state("root.express.setting.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.express.setting":{
                templateUrl : "root/express/setting/edit/_res/html/index.html",
                controller:'settingEditCtrl'
            }
        }
    })
});
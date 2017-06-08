var app = angular.module('setting', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.biddingManagement.setting", {
        url : "/setting",
        views : {
            "content@root.biddingManagement" : {
                templateUrl : "root/biddingManagement/setting/_res/html/index.html",
                controller:"settingCtrl"
            },"menu@root.biddingManagement" : {
                templateUrl : "root/biddingManagement/setting/_res/html/menu.html",
                controller:"settingMenuCtrl"
            }
        }
    }).state("root.biddingManagement.setting.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.biddingManagement.setting":{
                templateUrl : "root/biddingManagement/setting/edit/_res/html/index.html",
                controller:'settingEditCtrl'
            }
        }
    }).state("root.biddingManagement.setting.list[12]",{
        url:"/list[12]",
        views:{
            "content@root.biddingManagement.setting":{
                templateUrl : "root/biddingManagement/setting/list/_res/html/index.html",
                controller:'settingListCtrl'
            }
        }
    })
});
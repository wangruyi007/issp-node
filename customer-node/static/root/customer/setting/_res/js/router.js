var app = angular.module('setting', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.customer.setting", {
        url : "/setting",
        views : {
            "content@root.customer" : {
                templateUrl : "root/customer/setting/_res/html/index.html",
                controller:"settingCtrl"
            },"menu@root.customer" : {
                templateUrl : "root/customer/setting/_res/html/menu.html",
                controller:"settingMenuCtrl"
            }
        }
    }).state("root.customer.setting.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.customer.setting":{
                templateUrl : "root/customer/setting/edit/_res/html/index.html",
                controller:'settingEditCtrl'
            }
        }
    }).state("root.customer.setting.list[12]",{
        url:"/list[12]",
        views:{
            "content@root.customer.setting":{
                templateUrl : "root/customer/setting/list/_res/html/index.html",
                controller:'settingListCtrl'
            }
        }
    })
});
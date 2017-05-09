/**
 * Created by ike on 2017/4/13.
 */
var app = angular.module('assetsList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.initialize.sort.assets.list",{
        url:"/list",
        views:{
            "content@root.initialize.sort.assets":{
                templateUrl : "root/initialize/sort/assets/list/_res/html/index.html",
                controller:'assetsListCtrl'
            }
        }
    }).state("root.initialize.sort.assets.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.initialize.sort.assets.list":{
                templateUrl : "root/initialize/sort/assets/list/delete/_res/html/index.html",
                controller:'assetsDeleteCtrl'
            }
        }
    })
});
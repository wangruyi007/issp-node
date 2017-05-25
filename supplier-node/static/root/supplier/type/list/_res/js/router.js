/**
 * Created by ike on 2017/4/13.
 */
var app = angular.module('typeList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.supplier.type.list",{
        url:"/list",
        views:{
            "content@root.supplier.type":{
                templateUrl : "root/supplier/type/list/_res/html/index.html",
                controller:'typeListCtrl'
            }
        }
    }).state("root.supplier.type.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.supplier.type.list":{
                templateUrl : "root/supplier/type/list/delete/_res/html/index.html",
                controller:'typeDeleteCtrl'
            }
        }
    }).state("root.supplier.type.list.congeal[12]",{
        url:"/congeal[12]?id=",
        views:{
            "modal@root.supplier.type.list":{
                templateUrl : "root/supplier/type/list/congeal/_res/html/index.html",
                controller:'typeCongealCtrl'
            }
        }
    })
});
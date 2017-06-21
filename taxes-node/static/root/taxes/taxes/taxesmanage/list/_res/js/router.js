/**
 * Created by ike on 2017/4/13.
 */
var app = angular.module('taxesmanageList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.taxes.taxes.taxesmanage.list",{
        url:"/list",
        views:{
            "content@root.taxes.taxes.taxesmanage":{
                templateUrl : "root/taxes/taxes/taxesmanage/list/_res/html/index.html",
                controller:'taxesmanageListCtrl'
            }
        }
    }).state("root.taxes.taxes.taxesmanage.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.taxes.taxes.taxesmanage.list":{
                templateUrl : "root/taxes/taxes/taxesmanage/list/delete/_res/html/index.html",
                controller:'taxesmanageDeleteCtrl'
            }
        }
    })
});
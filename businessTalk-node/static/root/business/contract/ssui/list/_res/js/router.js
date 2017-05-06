/**
 * Created by ike on 2017/4/13.
 */
var app = angular.module('ssuiList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.business.contract.ssui.list",{
        url:"/list",
        views:{
            "content@root.business.contract.ssui":{
                templateUrl : "root/business/contract/ssui/list/_res/html/index.html",
                controller:'ssuiListCtrl'
            }
        }
    }).state("root.business.contract.ssui.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.business.contract.ssui.list":{
                templateUrl : "root/business/contract/ssui/list/delete/_res/html/index.html",
                controller:'ssuiDeleteCtrl'
            }
        }
    })
});
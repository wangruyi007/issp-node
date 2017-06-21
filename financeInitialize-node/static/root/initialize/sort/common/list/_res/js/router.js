/**
 * Created by ike on 2017/4/13.
 */
var app = angular.module('commonList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.initialize.sort.common.list",{
        url:"/list",
        views:{
            "content@root.initialize.sort.common":{
                templateUrl : "root/initialize/sort/common/list/_res/html/index.html",
                controller:'commonListCtrl'
            }
        }
    }).state("root.initialize.sort.common.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.initialize.sort.common.list":{
                templateUrl : "root/initialize/sort/common/list/delete/_res/html/index.html",
                controller:'commonDeleteCtrl'
            }
        }
    })
});
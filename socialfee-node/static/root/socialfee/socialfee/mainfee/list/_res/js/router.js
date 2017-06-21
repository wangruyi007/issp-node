/**
 * Created by ike on 2017/4/13.
 */
var app = angular.module('mainfeeList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.socialfee.socialfee.mainfee.list",{
        url:"/list",
        views:{
            "content@root.socialfee.socialfee.mainfee":{
                templateUrl : "root/socialfee/socialfee/mainfee/list/_res/html/index.html",
                controller:'mainfeeListCtrl'
            }
        }
    }).state("root.socialfee.socialfee.mainfee.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.socialfee.socialfee.mainfee.list":{
                templateUrl : "root/socialfee/socialfee/mainfee/list/delete/_res/html/index.html",
                controller:'mainfeeDeleteCtrl'
            }
        }
    })
});
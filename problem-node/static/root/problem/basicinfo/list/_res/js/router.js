/**
 * Created by ike on 2017/4/13.
 */
var app = angular.module('basicinfoList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.problem.basicinfo.list",{
        url:"/list",
        views:{
            "content@root.problem.basicinfo":{
                templateUrl : "root/problem/basicinfo/list/_res/html/index.html",
                controller:'basicinfoListCtrl'
            }
        }
    })
});
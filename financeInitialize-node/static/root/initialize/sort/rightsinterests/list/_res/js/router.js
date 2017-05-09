/**
 * Created by ike on 2017/4/13.
 */
var app = angular.module('rightsinterestsList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.initialize.sort.rightsinterests.list",{
        url:"/list",
        views:{
            "content@root.initialize.sort.rightsinterests":{
                templateUrl : "root/initialize/sort/rightsinterests/list/_res/html/index.html",
                controller:'rightsinterestsListCtrl'
            }
        }
    }).state("root.initialize.sort.rightsinterests.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.initialize.sort.rightsinterests.list":{
                templateUrl : "root/initialize/sort/rightsinterests/list/delete/_res/html/index.html",
                controller:'rightsinterestsDeleteCtrl'
            }
        }
    })
});
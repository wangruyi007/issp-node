var app = angular.module('views', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.organize.views", {
        url : "/views",
        views : {
            "content@root.organize" : {
                templateUrl : "root/organize/views/_res/html/index.html",
                controller:"viewsCtrl"
            },"menu@root.organize.views" : {
                templateUrl : "root/organize/views/_res/html/menu.html",
                controller:"viewMenuCtrl"
            }
        }
    }).state("root.organize.views.list[12]",{
        url:"/list[12]",
        views:{
            "content@root.organize.views":{
                templateUrl : "root/organize/views/list/_res/html/index.html",
                controller:'viewsListCtrl'
            }
        }
    })
});


var app = angular.module('postsList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.organize.management.posts.list",{
        url:"/list",
        views:{
            "content@root.organize.management.posts":{
                templateUrl : "root/organize/management/posts/list/_res/html/index.html",
                controller:'postsListCtrl'
            }
        }
    }).state("root.organize.management.posts.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.organize.management.posts.list":{
                templateUrl : "root/organize/management/posts/list/delete/_res/html/index.html",
                controller:'postsDeleteCtrl'
            }
        }
    }).state("root.organize.management.posts.list.congeal[12]",{
        url:"/congeal[12]?id=",
        views:{
            "modal@root.organize.management.posts.list":{
                templateUrl : "root/organize/management/posts/list/congeal/_res/html/index.html",
                controller:'postsCongealCtrl'
            }
        }
    })
});
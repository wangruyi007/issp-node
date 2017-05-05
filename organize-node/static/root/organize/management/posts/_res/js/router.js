var app = angular.module('posts', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.organize.management.posts", {
        url : "/posts",
        views : {
            "content@root.organize.management" : {
                templateUrl : "root/organize/management/posts/_res/html/index.html",
                controller:"postsCtrl"
            },"menu@root.organize.management" : {
                templateUrl : "root/organize/management/posts/_res/html/menu.html",
                controller:"postsMenuCtrl"
            }
        }
    }).state("root.organize.management.posts.add[12]", {
        url : "/add[12]",
        views : {
            "content@root.organize.management.posts" : {
                templateUrl : "root/organize/management/posts/add/_res/html/index.html",
                controller:"postsAddCtrl"
            }
        }
    }).state("root.organize.management.posts.edit[12]", {
        url : "/edit[12]?id=",
        views : {
            "content@root.organize.management.posts" : {
                templateUrl : "root/organize/management/posts/edit/_res/html/index.html",
                controller:"postsEditCtrl"
            }
        }
    }).state("root.organize.management.posts.explain[12]", {
        url : "/explain[12]?id=",
        views : {
            "content@root.organize.management.posts" : {
                templateUrl : "root/organize/management/posts/explain/_res/html/index.html",
                controller:"postsExplainCtrl"
            }
        }
    }).state("root.organize.management.posts.view[12]", {
        url : "/view[12]?id=",
        views : {
            "content@root.organize.management.posts" : {
                templateUrl : "root/organize/management/posts/view/_res/html/index.html",
                controller:"postsViewCtrl"
            }
        }
    })
});


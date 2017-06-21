var app = angular.module('postsServer',[]);
app.factory('postsSer',function ($http) {
    return {
        listPosts : listPosts,
        countPosts:countPosts,
        addPosts:addPosts,
        getPosts:getPosts,
        editPosts:editPosts,
        deletePosts:deletePosts,
        parentId:parentId,
        getDepartList:getDepartList,
        getArrangement:getArrangement,
        getModule:getModule,
        congealPosts:congealPosts,
        thawPosts:thawPosts,
        getAngle:getAngle,
        getDimension:getDimension,
        getClassify:getClassify,
        getReflect:getReflect,
        getOperate:getOperate,
        getPostId:getPostId,
        explainAdd:explainAdd,
        getPostsDetail:getPostsDetail
    };
    function listPosts(data) {
        return $http.get('/posts/maps',{params: data})
    }
    function countPosts() {
        return $http.get('/posts/getTotal')
    }
    function addPosts(data) {
        return $http.post('/posts/add',data)
    }
    function getPosts(data) {
        return $http.get('/posts/findById',{params: data})
    }
    function editPosts(data) {
        return $http.post('/posts/edit',data)
    }
    function deletePosts(data) {
        return $http.get('/posts/delete',{params: data})
    }
    function parentId() {
        return $http.get('/posts/parent')
    }
    function getDepartList(data) {
        return $http.get('/posts/getDepartList',{params: data})
    }
    function getArrangement() {
        return $http.get('/posts/getArrangement')
    }
    function getModule() {
        return $http.get('/posts/getModule')
    }
    function congealPosts(data) {
        return $http.get('/posts/congeal',{params: data})
    }
    function thawPosts(data) {
        return $http.get('/posts/thaw',{params: data})
    }
    function getAngle() {
        return $http.get('/posts/getAngle')
    }
    function getDimension() {
        return $http.get('/posts/getDimension')
    }
    function getClassify() {
        return $http.get('/posts/getClassify')
    }
    function getReflect() {
        return $http.get('/posts/getReflect')
    }
    function getOperate() {
        return $http.get('/posts/getOperate')
    }
    function getPostId(data) {
        return $http.get('/posts/getPostId',{params: data})
    }
    function explainAdd(data) {
        return $http.post('/posts/explainAdd',data)
    }
    function getPostsDetail(data) {
        return $http.get('/posts/getPostsDetail',{params: data})
    }

});
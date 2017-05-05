var app = angular.module('postlevelServer',[]);
app.factory('postlevelSer',function ($http) {
    return {
        listPostlevel : listPostlevel,
        countPostlevel:countPostlevel,
        addPostlevel:addPostlevel,
        getPostlevel:getPostlevel,
        editPostlevel:editPostlevel,
        deletePostlevel:deletePostlevel,
        parentId:parentId,
    };
    function listPostlevel(data) {
        return $http.get('/postlevel/maps',{params: data})
    }
    function countPostlevel() {
        return $http.get('/postlevel/getTotal')
    }
    function addPostlevel(data) {
        return $http.post('/postlevel/add',data)
    }
    function getPostlevel(data) {
        return $http.get('/postlevel/findById',{params: data})
    }
    function editPostlevel(data) {
        return $http.post('/postlevel/edit',data)
    }
    function deletePostlevel(data) {
        return $http.get('/postlevel/delete',{params: data})
    }
    function parentId() {
        return $http.get('/postlevel/parent')
    }
});
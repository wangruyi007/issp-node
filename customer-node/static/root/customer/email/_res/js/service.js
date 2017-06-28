var app = angular.module('emailServer',[]);
app.factory('emailSer',function ($http) {
    return {
        menuPermission:menuPermission,
        listEmail : listEmail,
        emailCount:emailCount,
        getWorks:getWorks,
        addCusemail:addCusemail,
        deleteEmail:deleteEmail,
        congealEmail:congealEmail,
        thawEmail:thawEmail,
        getCusEmailById:getCusEmailById,
        editEmail:editEmail,
        getSummarys:getSummarys
    };
    function menuPermission(data){
        return $http.get('/cusemail/guidePermission/'+data);
    }
    function listEmail(data) {
        return $http.post('/cusemail/listCusEmail',data)
    }

    function emailCount() {
        return $http.get('/cusemail/count')
    }
    function getWorks() {
        return $http.get('/customerbaseinfo/getWorks')
    }
    function addCusemail(data) {
        return $http.post('/cusemail/add',data)
    }
    function deleteEmail(data) {
        return $http.post('/cusemail/delete',data)
    }
    function congealEmail(data) {
        return $http.post('/cusemail/congeal',data)
    }
    function thawEmail(data) {
        return $http.post('/cusemail/thaw',data)
    }
    function getCusEmailById(data) {
        return $http.post('/cusemail/getCusEmailById',data)
    }
    function editEmail(data) {
        return $http.post('/cusemail/edit',data)
    }
    function getSummarys(data) {
        return $http.post('/cusemail/collect',data)
    }


});

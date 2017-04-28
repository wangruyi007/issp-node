var app = angular.module('emailServer',[]);
app.factory('emailSer',function ($http) {
    return {
        emailList : emailList,
        addEmail:addEmail,
        editEmail:editEmail,
        findEmailId:findEmailId,
        countEmail:countEmail,
        deleteEmail:deleteEmail,
        congealEmail:congealEmail,
        thawEmail:thawEmail,
        summaryList:summaryList,
        getArea:getArea
    };
    function emailList(data) {
        return $http.get('/collectemail/listCollectEmail',{
            params: data

        })
    }

    //添加
    function addEmail(data){
        return $http.post('/collectemail/add',data)
    }

    //编辑
    function editEmail(data){
        return $http.post('/collectemail/edit',data)
    }
    //id查询
    function findEmailId(data){
        return $http.get('/collectemail/getOne',{
            params:data
        })
    }
    //分页总条数
    function countEmail(){
        return $http.get('/collectemail/count')
    }
    //删除
    function deleteEmail(data){
        return $http.get('/collectemail/delete',{
            params: data
        })
    }
    //冻结
    function congealEmail(data){
        return $http.get('/collectemail/congeal',{
            params: data
        })
    }
    //解冻
    function thawEmail(data){
        return $http.get('/collectemail/thaw',{
            params: data
        })
    }
    //汇总
    function summaryList(data) {
        return $http.get('/collectemail/collect?areas='+data.join(','))
    }
    //获取所有地区
    function getArea(){
        return $http.get('/collectemail/listArea')
    }
});

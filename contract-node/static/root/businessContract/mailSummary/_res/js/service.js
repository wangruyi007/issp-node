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
        signSummary:signSummary,
        getSignArea:getSignArea,
        basicSummary:basicSummary,
        getBasicArea:getBasicArea,
        dispatchSummary:dispatchSummary,
        getDispatchArea:getDispatchArea
    };
    function emailList(data) {
        return $http.get('/collectemail/list',{
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
        return $http.get('/collectemail/getOneById',{
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
    //合同签订与立项汇总
    function signSummary(data) {
        return $http.get('/collectemail/collectSign?areas='+data)
    }
    //获取合同签订与立项汇总所有地区
    function getSignArea(){
        return $http.get('/siginmanage/listArea')
    }
    //项目基本信息合同汇总
    function basicSummary(data) {
        return $http.get('/collectemail/collectBaseInfo?firstCompany='+data)
    }
    //获取项目基本信息合同所有甲方公司
    function getBasicArea(){
        return $http.get('/baseinfomanage/listCompany')
    }
    //派工单信息合同汇总
    function dispatchSummary(data) {
        return $http.get('/collectemail/collectDispatch?areas='+data)
    }
    //获取派工单信息合同汇总所有地区
    function getDispatchArea(){
        return $http.get('/dispatchsheet/listArea')
    }

});

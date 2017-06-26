var app = angular.module('directionServer',[]);
app.factory('directionSer',function ($http) {
    return {
        menuPermission : menuPermission,
        listCourse : listCourse,
        coursedAdd:coursedAdd,
        courseEdit:courseEdit,
        findCourseId:findCourseId,
        countCourse:countCourse,
        courseDelete:courseDelete,
        courseGetType:courseGetType,
        congealCourse:congealCourse,
        thawCourse:thawCourse

    };
    //菜单功能权限
    function menuPermission(data) {
        return $http.get('/businesscourse/guidePermission/'+data);
    }
    //列表
    function listCourse(data) {
        return $http.get('/market/businesscourse/maps',{
            params: data

        })
    }
    //添加
    function coursedAdd(data){
        return $http.post('/market/businesscourse/save',data)
    }
    //编辑
    function courseEdit(data){
        return $http.post('/market/businesscourse/update',data)
    }
    //id查询
    function findCourseId(data){
        return $http.get('/market/businesscourse/findById',{
            params:data
        })
    }
    //分页总条数
    function countCourse(){
        return $http.get('/market/businesscourse/getTotal')
    }
    //删除
    function courseDelete(data){

        return $http.get('/market/businesscourse/delete',{
            params: data

        })
    }
    //获取业务类型数据
    function courseGetType(){
        return $http.get('/businesstype/findThaw')
    }
    //冻结
    function congealCourse(data){
        return $http.get('/market/businesscourse/congeal',{
            params: data
        })
    }
    //解冻
    function thawCourse(data){
        return $http.get('/market/businesscourse/thaw',{
            params: data
        })
    }
});

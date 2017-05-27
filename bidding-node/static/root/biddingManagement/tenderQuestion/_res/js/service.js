var app = angular.module('questionServer',[]);
app.factory('questionSer',function ($http) {
    return {
        answerList : answerList,
        addAnswer:addAnswer,
        editAnswer:editAnswer,
        findAnswerId:findAnswerId,
        countAnswer:countAnswer,
        deleteAnswer:deleteAnswer
    };
    function answerList(data) {
        return $http.get('/biddinganswerquestions/list',{
            params: data

        })
    }

    //添加
    function addAnswer(data){
        return $http.post('/biddinganswerquestions/add',data)
    }
    //编辑
    function editAnswer(data){
        return $http.post('/biddinganswerquestions/edit',data)
    }
    //id查询
    function findAnswerId(data){
        return $http.get('/biddinganswerquestions/answer',{
            params:data
        })
    }
    //分页总条数
    function countAnswer(){
        return $http.get('/biddinganswerquestions/count')
    }
    //删除
    function deleteAnswer(data){
        return $http.get('/biddinganswerquestions/delete',{
            params: data

        })
    }
});

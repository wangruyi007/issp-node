var Router = require('koa-router');
var path = require('path');
var sendfile = require('koa-sendfile');
var server = require(path.resolve('koa/servers/' + path.basename(path.resolve(__filename,'../'))+'/index.js'));
var config = require(path.resolve('plugins/read-config.js'));
var fetch = require('node-fetch');//url转发
module.exports = function(){
    var router = new Router();

    router.get('/plan/yearplan/maps', function*(){
        var $self = this;
        var page = $self.request.query;
        yield (server().yearplanList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                if(error.error && error.error.code && error.error.code == 'ETIMEDOUT'){
                    $self.body = {'msg' : '请求错误！', errno : 3};
                    $self.status = 408;
                }
            }));
    }).post('/plan/yearplan/save', function*(){//保存年计划数据
        var $self = this;
        var addData = $self.request.body;
        yield (server().yearplanAdd(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                if(error.error && error.error.code && error.error.code == 'ETIMEDOUT'){
                    $self.body = {'msg' : '请求错误！', errno : 3};
                    $self.status = 408;
                }
            }));
    }).post('/plan/yearplan/update', function*(){//修改年计划数据
        var $self = this;
        var editData = $self.request.body;
        yield (server().yearplanEdit(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                if(error.error && error.error.code && error.error.code == 'ETIMEDOUT'){
                    $self.body = {'msg' : '请求错误！', errno : 3};
                    $self.status = 408;
                }
            }));
    }).post('/plan/yearplan/findById', function*(){//查询年计划数据
        var $self = this;
        var findById = $self.request.body;
        yield (server().yearSearch(findById)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                if(error.error && error.error.code && error.error.code == 'ETIMEDOUT'){
                    $self.body = {'msg' : '请求错误！', errno : 3};
                    $self.status = 408;
                }
            }));
    }).get('/plan/yearplan/delete', function*(){//删除年计划数据
        var $self = this;
        var deleteData = $self.request.query;
        yield (server().yearplanDelete(deleteData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                if(error.error && error.error.code && error.error.code == 'ETIMEDOUT'){
                    $self.body = {'msg' : '请求错误！', errno : 3};
                    $self.status = 408;
                }
            }));
    }).get('/plan/yearplan/getTotal', function*(){//获取年计划总条数
        var $self = this;
        yield (server().getYearTotal()
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                if(error.error && error.error.code && error.error.code == 'ETIMEDOUT'){
                    $self.body = {'msg' : '请求错误！', errno : 3};
                    $self.status = 408;
                }
            }));
    }).get('/plan/monthplan/maps', function*(){//月计划列表
        var $self = this;
        var page = $self.request.query;
        console.log(page);
        yield (server().monthplanList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                console.log(error)
                if(error.error && error.error.code && error.error.code == 'ETIMEDOUT'){
                    $self.body = {'msg' : '请求错误！', errno : 3};
                    $self.status = 408;
                }
            }));
    }).post('/plan/monthplan/save', function*(){//保存月计划数据
        var $self = this;
        var addData = $self.request.body;
        yield (server().monthplanAdd(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                if(error.error && error.error.code && error.error.code == 'ETIMEDOUT'){
                    $self.body = {'msg' : '请求错误！', errno : 3};
                    $self.status = 408;
                }
            }));
    }).post('/plan/monthplan/update', function*(){//修改月计划数据
        var $self = this;
        var editData = $self.request.body;
        yield (server().monthplanEdit(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                if(error.error && error.error.code && error.error.code == 'ETIMEDOUT'){
                    $self.body = {'msg' : '请求错误！', errno : 3};
                    $self.status = 408;
                }
            }));
    }).get('/plan/monthplan/findById', function*(){//获取年计划ID
        var $self = this;
        var findById = $self.request.query;
        yield (server().findMonthId(findById)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                if(error.error && error.error.code && error.error.code == 'ETIMEDOUT'){
                    $self.body = {'msg' : '请求错误！', errno : 3};
                    $self.status = 408;
                }
            }));
    }).get('/plan/yearplan/getChoice', function*(){//获取年计划ID
        var $self = this;
        yield (server().getmonthChoice()
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                if(error.error && error.error.code && error.error.code == 'ETIMEDOUT'){
                    $self.body = {'msg' : '请求错误！', errno : 3};
                    $self.status = 408;
                }
            }));
    }).post('/plan/monthplan/findByYearId', function*(){//根据年计划ID查询月计划
        var $self = this;
        var findById = $self.request.body;
        yield (server().findByYearId(findById)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                if(error.error && error.error.code && error.error.code == 'ETIMEDOUT'){
                    $self.body = {'msg' : '请求错误！', errno : 3};
                    $self.status = 408;
                }
            }));
    }).get('/plan/monthplan/getTotal', function*(){//获取月计划总条数
        var $self = this;
            yield (server().getMonthTotal()
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                if(error.error && error.error.code && error.error.code == 'ETIMEDOUT'){
                    $self.body = {'msg' : '请求错误！', errno : 3};
                    $self.status = 408;
                }
            }));
    }).get('/plan/monthplan/delete/', function*(){//删除月计划
        var $self = this;
        var deleteData = $self.request.query;
            yield (server().monthplanDelete(deleteData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                if(error.error && error.error.code && error.error.code == 'ETIMEDOUT'){
                    $self.body = {'msg' : '请求错误！', errno : 3};
                    $self.status = 408;
                }
            }));
    }).get('/plan/weekplan/maps', function*(){//周计划列表
        var $self = this;
        var page = $self.request.query;
        yield (server().weekplanList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                console.log(error)
                if(error.error && error.error.code && error.error.code == 'ETIMEDOUT'){
                    $self.body = {'msg' : '请求错误！', errno : 3};
                    $self.status = 408;
                }
            }));
    }).post('/plan/weekplan/save', function*(){//保存周计划数据
        var $self = this;
        var addData = $self.request.body;
        yield (server().weekplanAdd(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                if(error.error && error.error.code && error.error.code == 'ETIMEDOUT'){
                    $self.body = {'msg' : '请求错误！', errno : 3};
                    $self.status = 408;
                }
            }));
    }).post('/plan/weekplan/update', function*(){//修改周计划数据
        var $self = this;
        var editData = $self.request.body;
        yield (server().weekplanEdit(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                if(error.error && error.error.code && error.error.code == 'ETIMEDOUT'){
                    $self.body = {'msg' : '请求错误！', errno : 3};
                    $self.status = 408;
                }
            }));
    }).get('/plan/weekplan/findById', function*(){//获取周计划ID
        var $self = this;
        var findById = $self.request.query;
        yield (server().getWeekId(findById)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                if(error.error && error.error.code && error.error.code == 'ETIMEDOUT'){
                    $self.body = {'msg' : '请求错误！', errno : 3};
                    $self.status = 408;
                }
            }));
    }).get('/plan/monthplan/getChoice', function*(){//获取月计划选择对象
        var $self = this;
        // var responseText = JSON.parse("{\"code\": 0, \"data\": [ {\"id\": \"5045a15d-8494-43a1-b92f-b313f8ab589e\", \"showValue\": \"2017年 业务类型:1 科目:1\"}]}");
        // $self.body = responseText;
        yield (server().weekGetChoice()
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                if(error.error && error.error.code && error.error.code == 'ETIMEDOUT'){
                    $self.body = {'msg' : '请求错误！', errno : 3};
                    $self.status = 408;
                }
            }));
    }).get('/plan/weekplan/findByMonth', function*(){//根据月计划ID查询周计划
        var $self = this;
        var findById = $self.request.query;
        yield (server().weekGetMonth(findById)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                if(error.error && error.error.code && error.error.code == 'ETIMEDOUT'){
                    $self.body = {'msg' : '请求错误！', errno : 3};
                    $self.status = 408;
                }
            }));
    }).get('/plan/weekplan/getTotal', function*(){//获取周计划总条数
        var $self = this;
        yield (server().getWeekTotal()
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                if(error.error && error.error.code && error.error.code == 'ETIMEDOUT'){
                    $self.body = {'msg' : '请求错误！', errno : 3};
                    $self.status = 408;
                }
            }));
    }).get('/plan/weekplan/delete', function*(){//删除年计划数据
        var $self = this;
        var deleteData = $self.request.query;
        yield (server().weekplanDelete(deleteData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                if(error.error && error.error.code && error.error.code == 'ETIMEDOUT'){
                    $self.body = {'msg' : '请求错误！', errno : 3};
                    $self.status = 408;
                }
            }));
    }).get('/plan/dayplan/maps', function*(){//天计划列表
        var $self = this;
        var page = $self.request.query;
        yield (server().dayplanList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                console.log(error)
                if(error.error && error.error.code && error.error.code == 'ETIMEDOUT'){
                    $self.body = {'msg' : '请求错误！', errno : 3};
                    $self.status = 408;
                }
            }));
    }).post('/plan/dayplan/save', function*(){//保存周计划数据
        var $self = this;
        var addData = $self.request.body;
        yield (server().dayplanAdd(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                if(error.error && error.error.code && error.error.code == 'ETIMEDOUT'){
                    $self.body = {'msg' : '请求错误！', errno : 3};
                    $self.status = 408;
                }
            }));
    }).post('/plan/dayplan/update', function*(){//编辑天计划数据
        var $self = this;
        var editData = $self.request.body;
        yield (server().dayplanEdit(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                if(error.error && error.error.code && error.error.code == 'ETIMEDOUT'){
                    $self.body = {'msg' : '请求错误！', errno : 3};
                    $self.status = 408;
                }
            }));
    }).get('/plan/dayplan/getTotal', function*(){//获取天计划总条数
        var $self = this;
        yield (server().getDayTotal()
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                if(error.error && error.error.code && error.error.code == 'ETIMEDOUT'){
                    $self.body = {'msg' : '请求错误！', errno : 3};
                    $self.status = 408;
                }
            }));
    }).get('/plan/dayplan/findById', function*(){//获取周计划ID
        var $self = this;
        var findById = $self.request.query;
        yield (server().getDayId(findById)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                if(error.error && error.error.code && error.error.code == 'ETIMEDOUT'){
                    $self.body = {'msg' : '请求错误！', errno : 3};
                    $self.status = 408;
                }
            }));
    }).get('/plan/dayplan/delete', function*(){//删除年计划数据
        var $self = this;
        var deleteData = $self.request.query;
        yield (server().dayplanDelete(deleteData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                if(error.error && error.error.code && error.error.code == 'ETIMEDOUT'){
                    $self.body = {'msg' : '请求错误！', errno : 3};
                    $self.status = 408;
                }
            }));
    })
    return router;
};

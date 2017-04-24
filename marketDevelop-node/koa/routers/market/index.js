var Router = require('koa-router');
var path = require('path');
var sendfile = require('koa-sendfile');
var server = require(path.resolve('koa/servers/' + path.basename(path.resolve(__filename,'../'))+'/index.js'));
var config = require(path.resolve('plugins/read-config.js'));
var fetch = require('node-fetch');//url转发
module.exports = function(){
    var router = new Router();

    router.get('/market/demandanalysis/maps', function*(){ //需求分析列表
        var $self = this;
        var page = $self.request.query;
        yield (server().demandList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/market/demandanalysis/save', function*(){//需求分析添加
        var $self = this;
        var addData = $self.request.body;
        yield (server().demandAdd(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/market/demandanalysis/update', function*(){//修改需求分析
        var $self = this;
        var editData = $self.request.body;
        yield (server().analysisEdit(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/market/demandanalysis/findById', function*(){//ID查询需求分析
        var $self = this;
        var findById = $self.request.query;
        yield (server().findAnalysisId(findById)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/market/demandanalysis/delete', function*(){//删除需求分析
        var $self = this;
        var deleteData = $self.request.query;
        yield (server().analysisDelete(deleteData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/market/demandanalysis/getTotal', function*(){//获取需求分析总条数
        var $self = this;
        yield (server().getAnalysisTotal()
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/market/targetinformation/maps', function*(){  //目标信息列表
        var $self = this;
        var page = $self.request.query;
        yield (server().targetList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/market/targetinformation/save', function*(){//添加目标信息
        var $self = this;
        var addData = $self.request.body;
        yield (server().targetAdd(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/market/targetinformation/update', function*(){//修改目标信息
        var $self = this;
        var editData = $self.request.body;
        console.log(editData);
        yield (server().targetEdit(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/market/targetinformation/findById', function*(){//ID查询目标信息
        var $self = this;
        var findById = $self.request.query;
        yield (server().findTargetId(findById)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/market/targetinformation/delete', function*(){//删除目标信息
        var $self = this;
        var deleteData = $self.request.query;
        yield (server().targetDelete(deleteData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/market/targetinformation/getTotal', function*(){//获取目标信息总条数
        var $self = this;
        yield (server().getTargetTotal()
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/market/marketchannel/maps', function*(){  //市场挖掘列表
        var $self = this;
        var page = $self.request.query;
        yield (server().marketList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/market/marketchannel/save', function*(){//添加市场挖掘
        var $self = this;
        var addData = $self.request.body;
        yield (server().channelAdd(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/market/marketchannel/update', function*(){//修改市场挖掘
        var $self = this;
        var editData = $self.request.body;
        console.log(editData);
        yield (server().marketEdit(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/market/marketchannel/findById', function*(){//ID查询市场挖掘
        var $self = this;
        var findById = $self.request.query;
        yield (server().findMarketId(findById)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/market/marketchannel/delete', function*(){//删除市场挖掘
        var $self = this;
        var deleteData = $self.request.query;
        yield (server().channelDelete(deleteData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/market/marketchannel/getTotal', function*(){//获取市场挖掘总条数
        var $self = this;
        yield (server().getChannelTotal()
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/market/marketresearch/maps', function*(){  //市场调研列表
        var $self = this;
        var page = $self.request.query;
        yield (server().marketList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/market/marketresearch/save', function*(){//添加市场调研
        var $self = this;
        var addData = $self.request.body;
        yield (server().channelAdd(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/market/marketresearch/update', function*(){//修改市场调研
        var $self = this;
        var editData = $self.request.body;
        console.log(editData);
        yield (server().marketEdit(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/market/marketresearch/findById', function*(){//ID查询市场调研
        var $self = this;
        var findById = $self.request.query;
        yield (server().findMarketId(findById)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/market/marketresearch/delete', function*(){//删除市场调研
        var $self = this;
        var deleteData = $self.request.query;
        yield (server().channelDelete(deleteData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/market/marketresearch/getTotal', function*(){//获取市场调研总条数
        var $self = this;
        yield (server().getChannelTotal()
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    })
    return router;
};

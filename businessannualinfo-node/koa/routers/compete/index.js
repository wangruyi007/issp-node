var Router = require('koa-router');
var path = require('path');
var sendfile = require('koa-sendfile');
var server = require(path.resolve('koa/servers/' + path.basename(path.resolve(__filename,'../'))+'/index.js'));
var config = require(path.resolve('plugins/read-config.js'));
var fetch = require('node-fetch');//url转发
module.exports = function(){
    var router = new Router();

    //工商年检信息列表
     router.get('/listCompeteregistered/list', function*(){
       var $self = this;
       var page = $self.request.query;
       page.userToken = $self.cookies.get('token');
        yield (server().listCompeteregistered(page)
            .then((parsedBody) =>{
            var responseText = JSON.parse(parsedBody);
            $self.body = responseText;
        }).catch((error) =>{
            $self.set('Content-Type','application/json;charset=utf-8');
            $self.body=error.error;
            console.error(error.error);
        }));
        //年检上传
     }).post('/annualUpload', function*(){
         var $self = this;
         var EditId = this.request.body;
         EditId.userToken = $self.cookies.get('token');
         yield (server().annualUpload(EditId)
             .then((parsedBody) =>{
             var responseText = JSON.parse(parsedBody);
         $self.body = responseText;
     }).catch((error) =>{
             $self.set('Content-Type','application/json;charset=utf-8');
         $self.body=error.error;
         console.error(error.error);
     }));
    //编辑工商年检
    }).post('/annualEdit', function*(){
        var $self = this;
        var EditId = this.request.body;
        EditId.userToken = $self.cookies.get('token');
        yield (server().annualEdit(EditId)
            .then((parsedBody) =>{
            var responseText = JSON.parse(parsedBody);
            $self.body = responseText;
        }).catch((error) =>{
            $self.set('Content-Type','application/json;charset=utf-8');
            $self.body=error.error;
            console.error(error.error);
        }));
    //工商年检信息列表总条数
    }).get('/annualNews', function*(){
        var $self = this;
        var page = $self.request.query;
        page.userToken = $self.cookies.get('token');
        yield (server().annualNews(page)
            .then((parsedBody) =>{
            var responseText = JSON.parse(parsedBody);
            $self.body = responseText;
        }).catch((error) =>{
            $self.set('Content-Type','application/json;charset=utf-8');
            $self.body=error.error;
            console.error(error.error);
        }));
    //一个工商年检信息
    }).get('/annualOne', function*(){
        var $self = this;
        var page = $self.request.query;
        page.userToken = $self.cookies.get('token');
        yield (server().annualOneId(page)
            .then((parsedBody) =>{
            var responseText = JSON.parse(parsedBody);
            $self.body = responseText;
        }).catch((error) =>{
            if(error.error && error.error.code && error.error.code == 'ETIMEDOUT'){
                $self.body = {'msg' : '请求错误！', errno : 3};
                $self.status = 408;
            }
        }));

    //删除工商年检信息
    }).get('/annualDelete', function*(){
            var $self = this;
            var EditId = $self.request.query;
            EditId.userToken = $self.cookies.get('token');
            var $self = $self;
            yield (server().annualDelete(EditId)
                .then((parsedBody) =>{
                    var responseText = JSON.parse(parsedBody);
                    $self.body = responseText;
                }).catch((error) =>{
                    if(error.error && error.error.code && error.error.code == 'ETIMEDOUT'){
                        $self.body = {'msg' : '请求错误！', errno : 3};
                        $self.status = 408;
                    }
            }));
    //年检下载
    }).post('/annualDownload', function*(){
        var $self = this;
        var EditId = this.request.body;
        EditId.userToken = $self.cookies.get('token');
        yield (server().annualDownload(EditId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    //添加工商年检信息
    }).post('/annualadd', function*(){
        var $self = this;
        var EditId = $self.request.body;
        EditId.userToken = $self.cookies.get('token');
        yield (server().annualadd(EditId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
        //分页
    }).get('/countinformation', function*(){
        var $self = this;
        var page = $self.request.query;
        page.userToken = $self.cookies.get('token');
        yield (server().annualNews(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    //--------------------------------2-------------------------------
    //一个工商税务变更
     }).get('/changeOne', function*(){
        var $self = this;
        var page = $self.request.query;
        page.userToken = $self.cookies.get('token');
        
        yield (server().changeOneId(page)
            .then((parsedBody) =>{
            var responseText = JSON.parse(parsedBody);
            $self.body = responseText;
        }).catch((error) =>{
            if(error.error && error.error.code && error.error.code == 'ETIMEDOUT'){
                $self.body = {'msg' : '请求错误！', errno : 3};
                $self.status = 408;
            }
        }));
    //添加工商税务变更
     }).post('/changeAdd', function*(){
        var $self = this;
        var EditId = this.request.body;
        EditId.userToken = $self.cookies.get('token');
        yield (server().changeAdd(EditId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    //编辑工商税务变更
     }).post('/changeEdit', function*(){
        var $self = this;
        var EditId = this.request.body;
        EditId.userToken = $self.cookies.get('token');
        yield (server().changeEdit(EditId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    //上传
     }).post('/changeUpload', function*(){
        var $self = this;
        var EditId = this.request.body;
        EditId.userToken = $self.cookies.get('token');
        yield (server().changeUpload(EditId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    //工商税务变更列表
     }).get('/changeList', function*(){
        var $self = this;
       var page = $self.request.query;
       page.userToken = $self.cookies.get('token');
        yield (server().changeList(page)
            .then((parsedBody) =>{
            var responseText = JSON.parse(parsedBody);
            $self.body = responseText;
        }).catch((error) =>{
            $self.set('Content-Type','application/json;charset=utf-8');
            $self.body=error.error;
            console.error(error.error);
        }));
    //下载
     }).post('/changeDowanload', function*(){
        var $self = this;
        var EditId = this.request.body;
        EditId.userToken = $self.cookies.get('token');
        yield (server().changeDowanload(EditId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    //删除工商税务变更
    }).get('/changeDelete/delete', function*(){
            var $self = this;
            var EditId = $self.request.query;
            EditId.userToken = $self.cookies.get('token');
            var $self = $self;
            yield (server().Deletechange(EditId)
                .then((parsedBody) =>{
                    var responseText = JSON.parse(parsedBody);
                    $self.body = responseText;
                }).catch((error) =>{
                    if(error.error && error.error.code && error.error.code == 'ETIMEDOUT'){
                        $self.body = {'msg' : '请求错误！', errno : 3};
                        $self.status = 408;
                    }
            }));
    //工商税务变更列表总条数
     }).get('/changeAll', function*(){
        var $self = this;
        var page = $self.request.query;
        page.userToken = $self.cookies.get('token');
        yield (server().changeAll(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/counttax', function*(){
        var $self = this;
        var page = $self.request.query;
        page.userToken = $self.cookies.get('token');
        yield (server().changeAll(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    //---------------------------------3---------------------------
    //注册上传
    }).post('/loginUpload', function*(){
        var $self = this;
        var EditId = this.request.body;
        EditId.userToken = $self.cookies.get('token');
        yield (server().loginUpload(EditId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
     //一个工商注册
    }).get('/loginOne', function*(){
        var $self = this;
        var findId = $self.request.query;
        findId.userToken = $self.cookies.get('token');
        yield (server().loginOneId(findId)
            .then((parsedBody) =>{
            var responseText = JSON.parse(parsedBody);
            $self.body = responseText;
        }).catch((error) =>{
            if(error.error && error.error.code && error.error.code == 'ETIMEDOUT'){
                $self.body = {'msg' : '请求错误！', errno : 3};
                $self.status = 408;
            }
        }));
    //添加工商注册
     }).post('/loginadd', function*(){
        var $self = this;
        var EditId = this.request.body;
        EditId.userToken = $self.cookies.get('token');
        yield (server().loginadd(EditId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
   //工商注册列表
     }).get('/loginList', function*(){
        var $self = this;
       var page = $self.request.query;
       page.userToken = $self.cookies.get('token');
        yield (server().loginList(page)
            .then((parsedBody) =>{
            var responseText = JSON.parse(parsedBody);
            $self.body = responseText;
        }).catch((error) =>{
            $self.set('Content-Type','application/json;charset=utf-8');
            $self.body=error.error;
            console.error(error.error);
        }));
    //注册下载
     }).post('/loginDownload', function*(){
        var $self = this;
        var EditId = this.request.body;
        EditId.userToken = $self.cookies.get('token');
        yield (server().loginDownload(EditId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    //编辑工商注册
     }).post('/loginEdit', function*(){
        var $self = this;
        var EditId = this.request.body;
        EditId.userToken = $self.cookies.get('token');
        yield (server().loginEdit(EditId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    //删除工商注册信息
    }).get('/businessregister/delete', function*(){
        var $self = this;
        var deletedId = $self.request.query;
        deletedId.userToken = $self.cookies.get('token');
        yield (server().DeleteLogin(deletedId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                if(error.error && error.error.code && error.error.code == 'ETIMEDOUT'){
                    $self.body = {'msg' : '请求错误！', errno : 3};
                    $self.status = 408;
                }
        }));
    //工商注册信息列表总条数
    }).get('/loginNews', function*(){
        var $self = this;
        var page = $self.request.query;
        page.userToken = $self.cookies.get('token');
        yield (server().loginNews(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
        //分页
    }).get('/competeregistered/count', function*(){
        var $self = this;
        var token = {userToken:$self.cookies.get('token')};
        yield (server().loginNews(token)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/user/logout', function*(next){
        var url = this.request.query;
        this.cookies.set("absUrl",url.absurl);
        this.body = {
            code:0,
            msg:"重定向"
        };
    })  
    return router;
};

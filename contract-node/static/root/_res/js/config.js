var app = angular.module('app');
app.config(function ($ocLazyLoadProvider) {
    $ocLazyLoadProvider.config({
        modules: [
            {
                name: 'indexSerModule',
                files: ['root/_res/js/service.js','root/_res/js/tool.js']
            }
        ]
    });
});
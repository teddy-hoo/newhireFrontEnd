require.config({

    paths: {
        'angular': '../lib/angular/angular',
        'angular-route': '../lib/angular-route/angular-route',
        'domReady': '../lib/requirejs-domready/domReady',
        'api': 'api',
        'nhApp': 'nhApp',
        'jasmine': '../unit/lib/jasmine-2.0.1/jasmine',
        'jasmine-html': '../unit/lib/jasmine-2.0.1/jasmine-html',
        'spec': '../unit/spec/newhireAppSpec',
        'angular-mocks': '../lib/angular-mocks/angular-mocks'
    },

    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-route': {
            deps: ['angular'],
            exports: 'angular-route'
        },
        'jasmine': {
            exports: 'jasmine'
        },
        'jasmine-html': {
            deps: ['jasmine'],
            exports: 'jasmine'
        },
        'angular-mocks': {
            deps: ['angular'],
            exports: 'angular-mocks'
        }
    }
});

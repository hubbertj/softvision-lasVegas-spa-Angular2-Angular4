'use strict';

var appMode = 'development'; //change to production when ready

var fs = require('fs'); //node method call to get file system
var appRoot = __dirname; //The name of the directory that the currently executing script resides in.
var root = appRoot;

if (!GLOBAL.bootstrapped) {
    GLOBAL.APP_ROOT = appRoot;
    
    GLOBAL.appConfig = function() {
        return require(root + '/config/' + getAppMode() + '.js');
    };

    GLOBAL.getAppMode = function(property) {
        return appMode;
    };

    GLOBAL.appLogger = function() {
        return require(root + '/lib/logger.js');
    };

    GLOBAL.appRequire = function(module) {
        return require(root + module);
    }

    appLogger().info('config mode ' + getAppMode());
    appLogger().info('bootstrap complete');
}

GLOBAL.bootstrapped = true;

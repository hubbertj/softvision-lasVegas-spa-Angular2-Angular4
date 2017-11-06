//  Server main file

'use strict';

var path = require('path');
var express = require('express');
var logger = appLogger();

module.exports = {
    serverSettings: null,
    setSettings: function(svrSettings) {
        this.serverSettings = svrSettings;
    },

    startServering: function() {
        var app = new express();
  
        try {
            app.set('port', this.serverSettings.port);
            // static assets
            app.use(express.static(path.join(__dirname, GLOBAL.APP_ROOT + this.serverSettings.serverRoot)));
            app.use(express.static(GLOBAL.APP_ROOT + this.serverSettings.serverRoot));

            app.listen(app.get('port'));

            logger.info('Serving booted');
            return true;
        } catch (err) {
            logger.error(err.message);
            return false;
        }
    }
}

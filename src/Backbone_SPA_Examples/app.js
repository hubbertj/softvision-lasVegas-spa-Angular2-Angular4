'use strict';

require('./bootstrap'); // starts all globel stuff needed

var util = require('util'); // I may need this
var logger = appLogger();
var config = appConfig();

if (config.sites) {
	var sites = config.sites;

    for (var i in sites) {
       var serverStart = require('./server-main.js');
       serverStart.setSettings(sites[i]);
       if(serverStart.startServering()){
       	    logger.info("Starting Web Sever " + sites[i].name + " on port " + sites[i].port);
       }
    } 
}

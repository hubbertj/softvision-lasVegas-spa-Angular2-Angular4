//thumbtack is my globally object if I need to define anything on that scope.
thumbtack = {};
thumbtack.viewRoot = 'views/';
thumbtack.modelRoot = 'models/';
thumbtack.collectionRoot = 'collections/';
thumbtack.settginsRoot = '../settings/';

define(["thumbtackRouter"], function(ThumbtackRouter) {
    var BootApp = {
        boot: function(options) {
        	//Creates routers & navgate to home view;
            thumbtack.router = new ThumbtackRouter();
            Backbone.history.start();
        }
    }
    return BootApp;
});

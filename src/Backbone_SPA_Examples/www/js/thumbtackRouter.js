define([], function() {
    var ThumbtackRouter = Backbone.Router.extend({
        mainContent: '#main-content .content > .inner-content',
        defaultPage: 'slotview',

        routes: {
            "": "defaultRoute",
            "/": "defaultRoute",
            "slotview": "slotview"
        },

        defaultRoute: function() {
            this.goToPage(this.defaultPage);
        },

        slotview: function() {
            this.goToPage('slotview');
        },

        goToPage: function(page) {
            var pageNavgation = thumbtack.viewRoot + page + '/' + page + '-main';
            this.setPageDefaults(page);
            require([pageNavgation], $.proxy(function(Page) {
                Page.initialize({
                    mainContent: this.mainContent
                });
            }, this));
        },

        setPageDefaults: function(page){
            //used for styling and navgation;
            $('.inner-content').removeAttr('id');
            $('.inner-content').attr('id', page + '-page');
        }
    });
    return ThumbtackRouter;
});

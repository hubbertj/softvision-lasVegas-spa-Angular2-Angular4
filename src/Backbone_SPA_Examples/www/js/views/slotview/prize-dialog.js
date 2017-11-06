define(['util/view',
        'text!templates/slotview/prize-dialog-tmpl.html'
    ],
    function(View,
        Template) {
        var PrizeDialogView = View.extend({
            el: null,
            model: null,
            template: _.template(Template),
            events: {
                "click button": "onClick"
            },

            initialize: function(options) {
                _.extend(this, options);
                this.model.bind("add", this.render, this);
                this.model.bind("change", this.render, this);
                this.model.bind("remove", this.render, this);
            },

            render: function() {
                this.$el.append(this.template(this.model.toJSON()));
                $('.dialog-back').css('display', 'block');
                return this;
            },

            close: function() {
                $('.dialog-back').css('display', 'none');
                this.remove();
            },

            onClick: function(evt) {
                evt.stopPropagation();
                evt.preventDefault();
                switch ($(evt.currentTarget).text()) {
                    case 'Close':
                        this.close();
                        break;
                }
                return false;
            }
        });
        return PrizeDialogView;
    });

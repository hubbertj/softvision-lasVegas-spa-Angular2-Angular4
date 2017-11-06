define(['util/view',
        'text!templates/slotview/slot-machine-tmpl.html'
    ],
    function(View,
        Template) {
        var SlotviewMachineView = View.extend({
            el: null,
            model: null,
            template: _.template(Template),
            events: {
                "click li": "onClick"
            },

            initialize: function(options) {
                _.extend(this, options);
                this.model.bind("change", this.recordResults, this);
            },

            render: function() {
                this.$el.html(this.template(this.model.toJSON()));
                this.$('.pay-line').hide();
                return this;
            },

            payLine: function(shouldShow) {
                if (shouldShow) {
                    this.$('.pay-line').show();
                } else {
                    this.$('.pay-line').hide();
                }
            },

            setStopState: function(isStop) {
                this.payLine(true);
                this.$('.spin-button').text('Spin');
            },

            recordResults: function() {
                // this is the function where we who save our model
            },

            onClick: function(event) {
                event.stopPropagation();
                event.preventDefault();

                switch ($(event.currentTarget).text()) {
                    case 'Spin':
                        this.payLine(false);
                        this.$('.spin-button').text('Stop');
                        this.trigger('spin:start');
                        break;

                    case 'Stop':
                        this.trigger('spin:stop');
                        break;

                    case 'Bet 500 Credits':
                        console.log('bet 500');
                        break;

                    case 'Bet 100 Credit':
                        console.log('bet 100');
                        break;

                    case 'Bet 200 Credit':
                        console.log('bet 200');
                        break;

                    case 'Bet 5 Credit':
                        console.log('bet 5');
                        break;

                    case 'Bet 2 Credit':
                        console.log('bet 2');
                        break;

                    case 'Bet 1 Credit':
                        console.log('bet 1');
                        break;

                }
                return true;
            }
        });
        return SlotviewMachineView;
    });

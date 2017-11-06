define([
        'views/slotview/slotview-machine-view',
        'views/slotview/slotview-reel-view',
        'views/slotview/prize-dialog',
        'collections/prize-collection',

        'models/slotview-model',

        'image!imgs/coffeMaker.png',
        'image!imgs/teaPot.gif',
        'image!imgs/espressoMachine.jpg',

        'image!imgs/espressoTamper.jpeg',
        'image!imgs/coffeeFilter.gif',
        'image!imgs/teaStrainer.jpg',

        'image!imgs/coffeeGrounds.jpg',
        'image!imgs/espressoBeans.jpeg',
        'image!imgs/loosetea.jpeg',

        'settings/prizes'
    ],
    function(
        SlotviewMachineView,
        SlotviewReelView,
        PrizeDialog,
        PrizesCollection,
        SlotViewMachineModel,

        CoffeMakerImage,
        TeaPotImage,
        EspressoMachineImage,

        EspressoTamper,
        CoffeeFilter,
        TeaStrainer,

        CoffeeGrounds,
        EspressoBeans,
        LooseTea,

        PrizeList) {
        var SlotViewMain = {

            mainContent: null,
            listView: [],
            slotViewMachineModel: null,
            slotviewMachineView: null,
            prizesCollection: null,

            resultOut: {
                reelleft: null,
                reelmiddle: null,
                reelright: null
            },

            reelelm: [{
                id: 'reel-left',
                images: {
                    top: TeaPotImage,
                    middle: CoffeMakerImage,
                    bottom: EspressoMachineImage
                },
                reelMap: {
                    top: "TEAPOT",
                    middle: "COFFEMAKER",
                    bottom: "ESPRESSOMACHINE"
                }
            }, {
                id: 'reel-middle',
                images: {
                    top: EspressoTamper,
                    middle: CoffeeFilter,
                    bottom: TeaStrainer
                },
                reelMap: {
                    top: "ESPRESSOTAMPER",
                    middle: "COFFEEFILTER",
                    bottom: "TEASTRAINER"
                }
            }, {
                id: 'reel-right',
                images: {
                    top: CoffeeGrounds,
                    middle: LooseTea,
                    bottom: EspressoBeans
                },
                reelMap: {
                    top: "COFFEEGROUNDS",
                    middle: "LOOSETEA",
                    bottom: "ESPRESSOBEANS"
                }
            }],

            initialize: function(options) {
                _.extend(this, options);
                this.slotViewMachineModel = new SlotViewMachineModel();
                this.prizesCollection = new PrizesCollection(PrizeList);
                this.createMachineView();
                this.createReels();
            },

            createMachineView: function() {

                this.slotviewMachineView = new SlotviewMachineView({
                        el: this.mainContent,
                        model: this.slotViewMachineModel,
                    }).on('spin:start', this.spinReels, this)
                    .on('spin:stop', this.spinStop, this).render();
            },

            spinReels: function() {
                _.each(this.listView, function(value, index) {
                    value.intervalSpeed = this.getRandomSpeed(17, 30);
                    value.randomSpin = this.getRandomSpeed(250, 750);
                    value.startSpin();
                }, this);
            },

            spinStop: function(event) {
                _.each(this.listView, function(value, index) {
                    value.intervalSpeed = 0;
                    value.spinStop();
                }, this);
            },

            getRandomSpeed: function(min, max) {
                return Math.floor(Math.random() * (max - min + 1)) + min;
            },

            createReels: function() {
                _.each(this.reelelm, function(value, index, arr) {

                    var slotviewReelView = new SlotviewReelView({
                        el: '#' + value.id,
                        id: value.id,
                        template: '<canvas></canvas>',
                        reelMap: value.reelMap,
                        randomSpin: this.getRandomSpeed(500, 5000),
                        model: this.slotViewMachineModel,
                        imagesCollection: value.images,
                        intervalSpeed: this.getRandomSpeed(17, 30)
                    }).on('completed:spin', this.results, this).render();

                    this.listView.push(slotviewReelView);

                }, this);
            },

            checkForPrize: function(resultObj) {
                var winningArr = [];
                var winningModel = false;
                _.each(resultObj, function(value, index) {
                    winningArr.push(value);
                });
                this.prizesCollection.each(function(model, index) {
                    if (_.isEqual(_.sortBy(model.get('winCase')), _.sortBy(winningArr))) {
                        winningModel = model;
                    }
                }, this);
                //did we win?
                if (winningModel) {
                    //makes my popup
                    var prizeDialog = new PrizeDialog({
                        className: 'dialog-main',
                        model: winningModel,
                    });
                    $('.dialog-popup').html(prizeDialog.render().$el);
                }
            },

            //determine if the use is a winner or loser;
            results: function(field, reelID) {

                //we may get a undefined so we just make sure it passes.
                if (typeof field == 'undefined') {
                    field = true;
                }

                this.resultOut[reelID] = field;
                if (this.resultOut.reelleft && this.resultOut.reelmiddle && this.resultOut.reelright) {
                    this.slotviewMachineView.setStopState(true);
                    this.checkForPrize(this.resultOut);

                    //clears my obj;
                    _.each(this.resultOut, function(value, index) {
                        this.resultOut[index] = null;
                    }, this);
                }
            }
        };
        return SlotViewMain;
    });

define(['util/model'],
    function(Model) {

    var SlotViewMachineModel = Model.extend({
        urlRoot: null,

        defaults: {
            reelleft: null,
            reelmiddle: null,
            reelright: null
        }
    });

    return SlotViewMachineModel;
});

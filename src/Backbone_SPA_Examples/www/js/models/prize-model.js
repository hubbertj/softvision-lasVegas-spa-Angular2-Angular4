define(['util/model'],
    function(Model) {

        var SlotViewMachineModel = Model.extend({
            urlRoot: null,

            defaults: {
                name: null,
                amount: null,
                type: null,
                quailty: null
            }
        });

        return SlotViewMachineModel;
    });

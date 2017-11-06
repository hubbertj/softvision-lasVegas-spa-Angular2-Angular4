// this is my base object if need to do some type of inherance. 
define(['util/collection',
        'models/prize-model'
    ],
    function(Collection, PrizeModel) {

        var PrizeCollection = Collection.extend({
            model: PrizeModel,
            url: null
        });

        return PrizeCollection;
    });

//this is a external settings list of the prizes;

define(function() {
    var PrizeList = [{
        name: "free cup of drip Starbucks Coffee",
        amount: "2.50",
        type: "Beverage/Food",
        quailty: 1,
        winCase: ["COFFEMAKER", "COFFEEFILTER", "COFFEEGROUNDS"]

    }, {
        name: "A free cup of Teavana Tea",
        amount: "9.50",
        type: "Beverage/Food",
        quailty: 1,
        winCase:  ["TEAPOT", "TEASTRAINER", "LOOSETEA"]

    }, {
        name: "free espresso from Starbucks",
        amount: "4.50",
        type: "Beverage/Food",
        quailty: 1,
        winCase: ["ESPRESSOMACHINE", "ESPRESSOTAMPER", "ESPRESSOBEANS"]

    }];
    return PrizeList;
});